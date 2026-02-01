#!/usr/bin/env node
/**
 * Porkbun DNS Configuration Script
 * Updates DNS records for verdantmission.org to point to Vercel
 * 
 * Required: Porkbun API credentials
 * Usage: node porkbun-dns-config.js
 */

const https = require('https');

// Porkbun API credentials from uploaded image
const API_KEY = 'pk1_70da5cfb89eb3e12d53eb2bc76d40076b90a33e74bded6ea98ae49c30b0f21a0';
const SECRET_API_KEY = 'sk1_bcf2d4cb318f0b7fe1dd98b43b61577e287e5494c42cbd8872b12ec44e18df9c';

const DOMAIN = 'verdantmission.org';
const VERCEL_IP = '76.76.21.21';
const VERCEL_CNAME = 'cname.vercel-dns.com';

/**
 * Make API request to Porkbun
 */
function porkbunRequest(endpoint, data) {
    return new Promise((resolve, reject) => {
        const payload = JSON.stringify({
            secretapikey: SECRET_API_KEY,
            apikey: API_KEY,
            ...data
        });

        const options = {
            hostname: 'porkbun.com',
            port: 443,
            path: `/api/json/v3/${endpoint}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': payload.length
            }
        };

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    const response = JSON.parse(body);
                    if (response.status === 'SUCCESS') {
                        resolve(response);
                    } else {
                        reject(new Error(`API Error: ${response.message || 'Unknown error'}`));
                    }
                } catch (e) {
                    reject(e);
                }
            });
        });

        req.on('error', reject);
        req.write(payload);
        req.end();
    });
}

/**
 * Get all DNS records for the domain
 */
async function getRecords() {
    console.log('📋 Fetching current DNS records...');
    const response = await porkbunRequest(`dns/retrieve/${DOMAIN}`);
    return response.records || [];
}

/**
 * Delete a DNS record
 */
async function deleteRecord(recordId) {
    console.log(`🗑️  Deleting record ID: ${recordId}`);
    await porkbunRequest(`dns/delete/${DOMAIN}/${recordId}`);
}

/**
 * Create a new DNS record
 */
async function createRecord(type, name, content, ttl = '600') {
    console.log(`✨ Creating ${type} record: ${name} → ${content}`);
    await porkbunRequest(`dns/create/${DOMAIN}`, {
        type,
        name,
        content,
        ttl
    });
}

/**
 * Main function
 */
async function main() {
    try {
        console.log('\n🚀 Porkbun DNS Configuration for Angelica Gore Photography\n');
        console.log('='.repeat(60));
        console.log(`Domain: ${DOMAIN}`);
        console.log(`Target: Vercel (${VERCEL_IP})`);
        console.log('='.repeat(60));
        console.log('');

        // Step 1: Get current records
        const records = await getRecords();
        console.log(`✅ Found ${records.length} existing DNS records\n`);

        // Step 2: Delete old A and CNAME records for root domain
        console.log('📝 Step 1: Removing old records...');
        for (const record of records) {
            // Delete A record pointing to old IP
            if (record.type === 'A' && record.name === '' && record.content === '216.198.79.1') {
                await deleteRecord(record.id);
            }
            // Delete old CNAME for www
            if (record.type === 'CNAME' && record.name === 'www') {
                await deleteRecord(record.id);
            }
            // Delete TXT record if it's the OpenAI verification
            if (record.type === 'TXT' && record.content.includes('openai-domain-verification')) {
                console.log('⚠️  Found OpenAI verification TXT record. Skipping (may still be needed).');
                // Uncomment next line to delete: await deleteRecord(record.id);
            }
        }
        console.log('✅ Old records removed\n');

        // Step 3: Create new A record for root domain
        console.log('📝 Step 2: Creating new Vercel A record...');
        await createRecord('A', '', VERCEL_IP, '600');
        console.log('✅ A record created\n');

        // Step 4: Create CNAME for www subdomain
        console.log('📝 Step 3: Creating CNAME for www...');
        await createRecord('CNAME', 'www', VERCEL_CNAME, '600');
        console.log('✅ CNAME record created\n');

        // Final summary
        console.log('='.repeat(60));
        console.log('✅ DNS Configuration Complete!');
        console.log('='.repeat(60));
        console.log('');
        console.log('📋 New DNS Records:');
        console.log(`   A     ${DOMAIN}     → ${VERCEL_IP}`);
        console.log(`   CNAME www.${DOMAIN} → ${VERCEL_CNAME}`);
        console.log('');
        console.log('⏱️  DNS Propagation:');
        console.log('   - May take 15 minutes to 48 hours');
        console.log('   - Check status: https://www.whatsmydns.net');
        console.log('');
        console.log('🔗 Next Steps:');
        console.log(`   1. Wait for DNS propagation`);
        console.log(`   2. Visit https://${DOMAIN} to verify`);
        console.log(`   3. Vercel will auto-provision SSL certificate`);
        console.log('');

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        console.error('\nTroubleshooting:');
        console.error('  - Verify API credentials are correct');
        console.error('  - Check if domain is unlocked at Porkbun');
        console.error('  - Ensure API access is enabled in Porkbun account');
        process.exit(1);
    }
}

// Run the script
main();
