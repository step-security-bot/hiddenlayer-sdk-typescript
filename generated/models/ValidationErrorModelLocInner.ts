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
/**
 * 
 * @export
 * @interface ValidationErrorModelLocInner
 */
export interface ValidationErrorModelLocInner {
}

/**
 * Check if a given object implements the ValidationErrorModelLocInner interface.
 */
export function instanceOfValidationErrorModelLocInner(value: object): value is ValidationErrorModelLocInner {
    return true;
}

export function ValidationErrorModelLocInnerFromJSON(json: any): ValidationErrorModelLocInner {
    return ValidationErrorModelLocInnerFromJSONTyped(json, false);
}

export function ValidationErrorModelLocInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationErrorModelLocInner {
    return json;
}

export function ValidationErrorModelLocInnerToJSON(value?: ValidationErrorModelLocInner | null): any {
    return value;
}

