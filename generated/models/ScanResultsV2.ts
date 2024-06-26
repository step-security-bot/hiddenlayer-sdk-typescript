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
import type { FileInfo } from './FileInfo';
import {
    FileInfoFromJSON,
    FileInfoFromJSONTyped,
    FileInfoToJSON,
} from './FileInfo';

/**
 * 
 * @export
 * @interface ScanResultsV2
 */
export interface ScanResultsV2 {
    /**
     * 
     * @type {string}
     * @memberof ScanResultsV2
     */
    scanId: string;
    /**
     * 
     * @type {string}
     * @memberof ScanResultsV2
     */
    status: ScanResultsV2StatusEnum;
    /**
     * 
     * @type {number}
     * @memberof ScanResultsV2
     */
    startTime: number;
    /**
     * 
     * @type {number}
     * @memberof ScanResultsV2
     */
    endTime: number;
    /**
     * 
     * @type {FileInfo}
     * @memberof ScanResultsV2
     */
    results: FileInfo;
    /**
     * 
     * @type {Array<object>}
     * @memberof ScanResultsV2
     */
    detections: Array<object>;
}


/**
 * @export
 */
export const ScanResultsV2StatusEnum = {
    Done: 'done',
    Accepted: 'accepted',
    Failed: 'failed',
    Pending: 'pending',
    Created: 'created',
    Retry: 'retry',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScanResultsV2StatusEnum = typeof ScanResultsV2StatusEnum[keyof typeof ScanResultsV2StatusEnum];


/**
 * Check if a given object implements the ScanResultsV2 interface.
 */
export function instanceOfScanResultsV2(value: object): value is ScanResultsV2 {
    if (!('scanId' in value) || value['scanId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('startTime' in value) || value['startTime'] === undefined) return false;
    if (!('endTime' in value) || value['endTime'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    if (!('detections' in value) || value['detections'] === undefined) return false;
    return true;
}

export function ScanResultsV2FromJSON(json: any): ScanResultsV2 {
    return ScanResultsV2FromJSONTyped(json, false);
}

export function ScanResultsV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ScanResultsV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'scanId': json['scan_id'],
        'status': json['status'],
        'startTime': json['start_time'],
        'endTime': json['end_time'],
        'results': FileInfoFromJSON(json['results']),
        'detections': json['detections'],
    };
}

export function ScanResultsV2ToJSON(value?: ScanResultsV2 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'scan_id': value['scanId'],
        'status': value['status'],
        'start_time': value['startTime'],
        'end_time': value['endTime'],
        'results': FileInfoToJSON(value['results']),
        'detections': value['detections'],
    };
}

