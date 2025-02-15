/* tslint:disable */
/* eslint-disable */
/**
 * HiddenLayer ModelScan
 * HiddenLayer ModelScan API for scanning of models
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ScanModelRequest,
  ScanResultsV2,
  ValidationErrorModel,
} from '../models/index';
import {
    ScanModelRequestFromJSON,
    ScanModelRequestToJSON,
    ScanResultsV2FromJSON,
    ScanResultsV2ToJSON,
    ValidationErrorModelFromJSON,
    ValidationErrorModelToJSON,
} from '../models/index';

export interface ScanModelOperationRequest {
    sensorId: string;
    scanModelRequest?: ScanModelRequest;
}

export interface ScanStatusRequest {
    sensorId: string;
}

/**
 * 
 */
export class ModelScanApi extends runtime.BaseAPI {

    /**
     * Scan a model
     */
    async scanModelRaw(requestParameters: ScanModelOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sensorId'] == null) {
            throw new runtime.RequiredError(
                'sensorId',
                'Required parameter "sensorId" was null or undefined when calling scanModel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v2/submit/sensors/{sensor_id}/scan`.replace(`{${"sensor_id"}}`, encodeURIComponent(String(requestParameters['sensorId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScanModelRequestToJSON(requestParameters['scanModelRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Scan a model
     */
    async scanModel(requestParameters: ScanModelOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.scanModelRaw(requestParameters, initOverrides);
    }

    /**
     * Get Status or Result of a Scan
     */
    async scanStatusRaw(requestParameters: ScanStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScanResultsV2>> {
        if (requestParameters['sensorId'] == null) {
            throw new runtime.RequiredError(
                'sensorId',
                'Required parameter "sensorId" was null or undefined when calling scanStatus().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v2/scan/status/{sensor_id}`.replace(`{${"sensor_id"}}`, encodeURIComponent(String(requestParameters['sensorId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScanResultsV2FromJSON(jsonValue));
    }

    /**
     * Get Status or Result of a Scan
     */
    async scanStatus(requestParameters: ScanStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScanResultsV2> {
        const response = await this.scanStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
