import os from 'os';

import {v4 as uuidv4} from 'uuid';
import { HiddenLayerServiceClient } from '../hiddenlayer/HiddenLayerServiceClient';
import assert from 'assert';

describe('Integration test to scan a model', () => {
    function getClient() {
        const clientId = process.env.HL_CLIENT_ID;
        const clientSecret = process.env.HL_CLIENT_SECRET;

        if (!clientId) {
            throw new Error("HL_CLIENT_ID is not set");
        }

        if (!clientSecret) {
            throw new Error("HL_CLIENT_SECRET is not set");
        }

        return new HiddenLayerServiceClient(clientId, clientSecret);
    }

    it('should scan a model', async () => {
        const modelPath = `./integration-tests/malicious_model.pkl`;

        const client = getClient()
        const results = await client.modelScanner.scanFile(`sdk-integration-scan-mobdel-${uuidv4()}`, modelPath);

        const detections = results.detections;

        console.log(results);

        assert(results.results.pickle_modules.length > 0);
        assert(results.results.pickle_modules.includes("builtins.exec"));

        assert(detections != null);
        assert(detections[0]['severity'] == "MALICIOUS");
        assert(detections[0]["description"].includes('system'));
    })
})