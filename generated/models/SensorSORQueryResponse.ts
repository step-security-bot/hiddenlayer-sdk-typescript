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

import { mapValues } from '../runtime';
import type { SensorSORItemResponse } from './SensorSORItemResponse';
import {
    SensorSORItemResponseFromJSON,
    SensorSORItemResponseFromJSONTyped,
    SensorSORItemResponseToJSON,
} from './SensorSORItemResponse';

/**
 * 
 * @export
 * @interface SensorSORQueryResponse
 */
export interface SensorSORQueryResponse {
    /**
     * 
     * @type {number}
     * @memberof SensorSORQueryResponse
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof SensorSORQueryResponse
     */
    pageSize: number;
    /**
     * 
     * @type {number}
     * @memberof SensorSORQueryResponse
     */
    pageNumber: number;
    /**
     * 
     * @type {Array<SensorSORItemResponse>}
     * @memberof SensorSORQueryResponse
     */
    results: Array<SensorSORItemResponse>;
}

/**
 * Check if a given object implements the SensorSORQueryResponse interface.
 */
export function instanceOfSensorSORQueryResponse(value: object): value is SensorSORQueryResponse {
    if (!('totalCount' in value) || value['totalCount'] === undefined) return false;
    if (!('pageSize' in value) || value['pageSize'] === undefined) return false;
    if (!('pageNumber' in value) || value['pageNumber'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function SensorSORQueryResponseFromJSON(json: any): SensorSORQueryResponse {
    return SensorSORQueryResponseFromJSONTyped(json, false);
}

export function SensorSORQueryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorSORQueryResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'totalCount': json['total_count'],
        'pageSize': json['page_size'],
        'pageNumber': json['page_number'],
        'results': ((json['results'] as Array<any>).map(SensorSORItemResponseFromJSON)),
    };
}

export function SensorSORQueryResponseToJSON(value?: SensorSORQueryResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total_count': value['totalCount'],
        'page_size': value['pageSize'],
        'page_number': value['pageNumber'],
        'results': ((value['results'] as Array<any>).map(SensorSORItemResponseToJSON)),
    };
}
