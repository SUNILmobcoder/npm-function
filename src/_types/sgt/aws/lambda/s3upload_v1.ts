/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import {
  VendorWebImageData,
  InspiImageData,
} from "../../../sgt/content/content_v2";

export const protobufPackage = "sgt.aws.lambda.s3upload.v1";

export interface S3UploadData {
  /** guid */
  correlationId: string;
  imageType: number;
  filename: string;
  source: string;
  description: string;
  category: string;
  prefix: string;
  contractor: number;
  departmentCode: string;
  timezoneOffset: number;
  dateTaken: Date | undefined;
  gpsTimestamp: Date | undefined;
  gpsDop: number;
  gpsAltitude: number;
  gpsLatitude: number;
  gpsLongitude: number;
  orderNumber: number | undefined;
  propertyId: number | undefined;
  vendorWebImageData: VendorWebImageData | undefined;
  inspiImageData: InspiImageData | undefined;
}

export interface S3ExifData {
  gpsDop: number;
  gpsAltitude: number;
  gpsLatitude: number;
  gpsLongitude: number;
  gpsTimestamp: Date | undefined;
  dateTimeOriginal: string;
  dateTimeDigitized: string;
  userComment: string;
  cameraMake: string;
  cameraModel: string;
  cameraOsVersion: string;
}

export interface S3SinkData {
  correlationId: string;
  success: boolean;
  message: string;
  s3Path: string;
  orderNumber: number | undefined;
  propertyId: number | undefined;
}

export interface S3RemoveData {
  s3Path: string;
}

export interface S3ProcessResult {
  results: S3ProcessResult_Result[];
}

export interface S3ProcessResult_Result {
  correlationId: string;
  filePath: string;
  fileSize: number;
  fileSha1: string;
  s3ExifData: S3ExifData | undefined;
  s3UploadData: S3UploadData | undefined;
  thumbnailPath: string;
  thumbnailSize: number;
  imageHeight: number;
  imageWidth: number;
  /** if either error_code or error_message != zero, nothing else is valid. */
  errorCode: number;
  errorMessage: string;
}

export interface S3UploadStatusData {
  correlationId: string;
  orderNumber: number | undefined;
  propertyId: number | undefined;
}

function createBaseS3UploadData(): S3UploadData {
  return {
    correlationId: "",
    imageType: 0,
    filename: "",
    source: "",
    description: "",
    category: "",
    prefix: "",
    contractor: 0,
    departmentCode: "",
    timezoneOffset: 0,
    dateTaken: undefined,
    gpsTimestamp: undefined,
    gpsDop: 0,
    gpsAltitude: 0,
    gpsLatitude: 0,
    gpsLongitude: 0,
    orderNumber: undefined,
    propertyId: undefined,
    vendorWebImageData: undefined,
    inspiImageData: undefined,
  };
}

export const S3UploadData = {
  encode(
    message: S3UploadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.correlationId !== "") {
      writer.uint32(10).string(message.correlationId);
    }
    if (message.imageType !== 0) {
      writer.uint32(16).int64(message.imageType);
    }
    if (message.filename !== "") {
      writer.uint32(26).string(message.filename);
    }
    if (message.source !== "") {
      writer.uint32(34).string(message.source);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.category !== "") {
      writer.uint32(50).string(message.category);
    }
    if (message.prefix !== "") {
      writer.uint32(58).string(message.prefix);
    }
    if (message.contractor !== 0) {
      writer.uint32(64).int64(message.contractor);
    }
    if (message.departmentCode !== "") {
      writer.uint32(74).string(message.departmentCode);
    }
    if (message.timezoneOffset !== 0) {
      writer.uint32(80).int32(message.timezoneOffset);
    }
    if (message.dateTaken !== undefined) {
      Timestamp.encode(
        toTimestamp(message.dateTaken),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.gpsTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.gpsTimestamp),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.gpsDop !== 0) {
      writer.uint32(105).double(message.gpsDop);
    }
    if (message.gpsAltitude !== 0) {
      writer.uint32(112).int32(message.gpsAltitude);
    }
    if (message.gpsLatitude !== 0) {
      writer.uint32(121).double(message.gpsLatitude);
    }
    if (message.gpsLongitude !== 0) {
      writer.uint32(129).double(message.gpsLongitude);
    }
    if (message.orderNumber !== undefined) {
      writer.uint32(800).int64(message.orderNumber);
    }
    if (message.propertyId !== undefined) {
      writer.uint32(808).int64(message.propertyId);
    }
    if (message.vendorWebImageData !== undefined) {
      VendorWebImageData.encode(
        message.vendorWebImageData,
        writer.uint32(1602).fork()
      ).ldelim();
    }
    if (message.inspiImageData !== undefined) {
      InspiImageData.encode(
        message.inspiImageData,
        writer.uint32(1610).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3UploadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3UploadData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.correlationId = reader.string();
          break;
        case 2:
          message.imageType = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.filename = reader.string();
          break;
        case 4:
          message.source = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.category = reader.string();
          break;
        case 7:
          message.prefix = reader.string();
          break;
        case 8:
          message.contractor = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.departmentCode = reader.string();
          break;
        case 10:
          message.timezoneOffset = reader.int32();
          break;
        case 11:
          message.dateTaken = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.gpsTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.gpsDop = reader.double();
          break;
        case 14:
          message.gpsAltitude = reader.int32();
          break;
        case 15:
          message.gpsLatitude = reader.double();
          break;
        case 16:
          message.gpsLongitude = reader.double();
          break;
        case 100:
          message.orderNumber = longToNumber(reader.int64() as Long);
          break;
        case 101:
          message.propertyId = longToNumber(reader.int64() as Long);
          break;
        case 200:
          message.vendorWebImageData = VendorWebImageData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 201:
          message.inspiImageData = InspiImageData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3UploadData {
    return {
      correlationId: isSet(object.correlationId)
        ? String(object.correlationId)
        : "",
      imageType: isSet(object.imageType) ? Number(object.imageType) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      source: isSet(object.source) ? String(object.source) : "",
      description: isSet(object.description) ? String(object.description) : "",
      category: isSet(object.category) ? String(object.category) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      contractor: isSet(object.contractor) ? Number(object.contractor) : 0,
      departmentCode: isSet(object.departmentCode)
        ? String(object.departmentCode)
        : "",
      timezoneOffset: isSet(object.timezoneOffset)
        ? Number(object.timezoneOffset)
        : 0,
      dateTaken: isSet(object.dateTaken)
        ? fromJsonTimestamp(object.dateTaken)
        : undefined,
      gpsTimestamp: isSet(object.gpsTimestamp)
        ? fromJsonTimestamp(object.gpsTimestamp)
        : undefined,
      gpsDop: isSet(object.gpsDop) ? Number(object.gpsDop) : 0,
      gpsAltitude: isSet(object.gpsAltitude) ? Number(object.gpsAltitude) : 0,
      gpsLatitude: isSet(object.gpsLatitude) ? Number(object.gpsLatitude) : 0,
      gpsLongitude: isSet(object.gpsLongitude)
        ? Number(object.gpsLongitude)
        : 0,
      orderNumber: isSet(object.orderNumber)
        ? Number(object.orderNumber)
        : undefined,
      propertyId: isSet(object.propertyId)
        ? Number(object.propertyId)
        : undefined,
      vendorWebImageData: isSet(object.vendorWebImageData)
        ? VendorWebImageData.fromJSON(object.vendorWebImageData)
        : undefined,
      inspiImageData: isSet(object.inspiImageData)
        ? InspiImageData.fromJSON(object.inspiImageData)
        : undefined,
    };
  },

  toJSON(message: S3UploadData): unknown {
    const obj: any = {};
    message.correlationId !== undefined &&
      (obj.correlationId = message.correlationId);
    message.imageType !== undefined &&
      (obj.imageType = Math.round(message.imageType));
    message.filename !== undefined && (obj.filename = message.filename);
    message.source !== undefined && (obj.source = message.source);
    message.description !== undefined &&
      (obj.description = message.description);
    message.category !== undefined && (obj.category = message.category);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.contractor !== undefined &&
      (obj.contractor = Math.round(message.contractor));
    message.departmentCode !== undefined &&
      (obj.departmentCode = message.departmentCode);
    message.timezoneOffset !== undefined &&
      (obj.timezoneOffset = Math.round(message.timezoneOffset));
    message.dateTaken !== undefined &&
      (obj.dateTaken = message.dateTaken.toISOString());
    message.gpsTimestamp !== undefined &&
      (obj.gpsTimestamp = message.gpsTimestamp.toISOString());
    message.gpsDop !== undefined && (obj.gpsDop = message.gpsDop);
    message.gpsAltitude !== undefined &&
      (obj.gpsAltitude = Math.round(message.gpsAltitude));
    message.gpsLatitude !== undefined &&
      (obj.gpsLatitude = message.gpsLatitude);
    message.gpsLongitude !== undefined &&
      (obj.gpsLongitude = message.gpsLongitude);
    message.orderNumber !== undefined &&
      (obj.orderNumber = Math.round(message.orderNumber));
    message.propertyId !== undefined &&
      (obj.propertyId = Math.round(message.propertyId));
    message.vendorWebImageData !== undefined &&
      (obj.vendorWebImageData = message.vendorWebImageData
        ? VendorWebImageData.toJSON(message.vendorWebImageData)
        : undefined);
    message.inspiImageData !== undefined &&
      (obj.inspiImageData = message.inspiImageData
        ? InspiImageData.toJSON(message.inspiImageData)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3UploadData>, I>>(
    object: I
  ): S3UploadData {
    const message = createBaseS3UploadData();
    message.correlationId = object.correlationId ?? "";
    message.imageType = object.imageType ?? 0;
    message.filename = object.filename ?? "";
    message.source = object.source ?? "";
    message.description = object.description ?? "";
    message.category = object.category ?? "";
    message.prefix = object.prefix ?? "";
    message.contractor = object.contractor ?? 0;
    message.departmentCode = object.departmentCode ?? "";
    message.timezoneOffset = object.timezoneOffset ?? 0;
    message.dateTaken = object.dateTaken ?? undefined;
    message.gpsTimestamp = object.gpsTimestamp ?? undefined;
    message.gpsDop = object.gpsDop ?? 0;
    message.gpsAltitude = object.gpsAltitude ?? 0;
    message.gpsLatitude = object.gpsLatitude ?? 0;
    message.gpsLongitude = object.gpsLongitude ?? 0;
    message.orderNumber = object.orderNumber ?? undefined;
    message.propertyId = object.propertyId ?? undefined;
    message.vendorWebImageData =
      object.vendorWebImageData !== undefined &&
      object.vendorWebImageData !== null
        ? VendorWebImageData.fromPartial(object.vendorWebImageData)
        : undefined;
    message.inspiImageData =
      object.inspiImageData !== undefined && object.inspiImageData !== null
        ? InspiImageData.fromPartial(object.inspiImageData)
        : undefined;
    return message;
  },
};

function createBaseS3ExifData(): S3ExifData {
  return {
    gpsDop: 0,
    gpsAltitude: 0,
    gpsLatitude: 0,
    gpsLongitude: 0,
    gpsTimestamp: undefined,
    dateTimeOriginal: "",
    dateTimeDigitized: "",
    userComment: "",
    cameraMake: "",
    cameraModel: "",
    cameraOsVersion: "",
  };
}

export const S3ExifData = {
  encode(
    message: S3ExifData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gpsDop !== 0) {
      writer.uint32(9).double(message.gpsDop);
    }
    if (message.gpsAltitude !== 0) {
      writer.uint32(16).int32(message.gpsAltitude);
    }
    if (message.gpsLatitude !== 0) {
      writer.uint32(25).double(message.gpsLatitude);
    }
    if (message.gpsLongitude !== 0) {
      writer.uint32(33).double(message.gpsLongitude);
    }
    if (message.gpsTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.gpsTimestamp),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.dateTimeOriginal !== "") {
      writer.uint32(50).string(message.dateTimeOriginal);
    }
    if (message.dateTimeDigitized !== "") {
      writer.uint32(58).string(message.dateTimeDigitized);
    }
    if (message.userComment !== "") {
      writer.uint32(66).string(message.userComment);
    }
    if (message.cameraMake !== "") {
      writer.uint32(74).string(message.cameraMake);
    }
    if (message.cameraModel !== "") {
      writer.uint32(82).string(message.cameraModel);
    }
    if (message.cameraOsVersion !== "") {
      writer.uint32(90).string(message.cameraOsVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3ExifData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3ExifData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpsDop = reader.double();
          break;
        case 2:
          message.gpsAltitude = reader.int32();
          break;
        case 3:
          message.gpsLatitude = reader.double();
          break;
        case 4:
          message.gpsLongitude = reader.double();
          break;
        case 5:
          message.gpsTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.dateTimeOriginal = reader.string();
          break;
        case 7:
          message.dateTimeDigitized = reader.string();
          break;
        case 8:
          message.userComment = reader.string();
          break;
        case 9:
          message.cameraMake = reader.string();
          break;
        case 10:
          message.cameraModel = reader.string();
          break;
        case 11:
          message.cameraOsVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3ExifData {
    return {
      gpsDop: isSet(object.gpsDop) ? Number(object.gpsDop) : 0,
      gpsAltitude: isSet(object.gpsAltitude) ? Number(object.gpsAltitude) : 0,
      gpsLatitude: isSet(object.gpsLatitude) ? Number(object.gpsLatitude) : 0,
      gpsLongitude: isSet(object.gpsLongitude)
        ? Number(object.gpsLongitude)
        : 0,
      gpsTimestamp: isSet(object.gpsTimestamp)
        ? fromJsonTimestamp(object.gpsTimestamp)
        : undefined,
      dateTimeOriginal: isSet(object.dateTimeOriginal)
        ? String(object.dateTimeOriginal)
        : "",
      dateTimeDigitized: isSet(object.dateTimeDigitized)
        ? String(object.dateTimeDigitized)
        : "",
      userComment: isSet(object.userComment) ? String(object.userComment) : "",
      cameraMake: isSet(object.cameraMake) ? String(object.cameraMake) : "",
      cameraModel: isSet(object.cameraModel) ? String(object.cameraModel) : "",
      cameraOsVersion: isSet(object.cameraOsVersion)
        ? String(object.cameraOsVersion)
        : "",
    };
  },

  toJSON(message: S3ExifData): unknown {
    const obj: any = {};
    message.gpsDop !== undefined && (obj.gpsDop = message.gpsDop);
    message.gpsAltitude !== undefined &&
      (obj.gpsAltitude = Math.round(message.gpsAltitude));
    message.gpsLatitude !== undefined &&
      (obj.gpsLatitude = message.gpsLatitude);
    message.gpsLongitude !== undefined &&
      (obj.gpsLongitude = message.gpsLongitude);
    message.gpsTimestamp !== undefined &&
      (obj.gpsTimestamp = message.gpsTimestamp.toISOString());
    message.dateTimeOriginal !== undefined &&
      (obj.dateTimeOriginal = message.dateTimeOriginal);
    message.dateTimeDigitized !== undefined &&
      (obj.dateTimeDigitized = message.dateTimeDigitized);
    message.userComment !== undefined &&
      (obj.userComment = message.userComment);
    message.cameraMake !== undefined && (obj.cameraMake = message.cameraMake);
    message.cameraModel !== undefined &&
      (obj.cameraModel = message.cameraModel);
    message.cameraOsVersion !== undefined &&
      (obj.cameraOsVersion = message.cameraOsVersion);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3ExifData>, I>>(
    object: I
  ): S3ExifData {
    const message = createBaseS3ExifData();
    message.gpsDop = object.gpsDop ?? 0;
    message.gpsAltitude = object.gpsAltitude ?? 0;
    message.gpsLatitude = object.gpsLatitude ?? 0;
    message.gpsLongitude = object.gpsLongitude ?? 0;
    message.gpsTimestamp = object.gpsTimestamp ?? undefined;
    message.dateTimeOriginal = object.dateTimeOriginal ?? "";
    message.dateTimeDigitized = object.dateTimeDigitized ?? "";
    message.userComment = object.userComment ?? "";
    message.cameraMake = object.cameraMake ?? "";
    message.cameraModel = object.cameraModel ?? "";
    message.cameraOsVersion = object.cameraOsVersion ?? "";
    return message;
  },
};

function createBaseS3SinkData(): S3SinkData {
  return {
    correlationId: "",
    success: false,
    message: "",
    s3Path: "",
    orderNumber: undefined,
    propertyId: undefined,
  };
}

export const S3SinkData = {
  encode(
    message: S3SinkData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.correlationId !== "") {
      writer.uint32(10).string(message.correlationId);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.s3Path !== "") {
      writer.uint32(34).string(message.s3Path);
    }
    if (message.orderNumber !== undefined) {
      writer.uint32(800).int64(message.orderNumber);
    }
    if (message.propertyId !== undefined) {
      writer.uint32(808).int64(message.propertyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3SinkData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3SinkData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.correlationId = reader.string();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.s3Path = reader.string();
          break;
        case 100:
          message.orderNumber = longToNumber(reader.int64() as Long);
          break;
        case 101:
          message.propertyId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3SinkData {
    return {
      correlationId: isSet(object.correlationId)
        ? String(object.correlationId)
        : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      message: isSet(object.message) ? String(object.message) : "",
      s3Path: isSet(object.s3Path) ? String(object.s3Path) : "",
      orderNumber: isSet(object.orderNumber)
        ? Number(object.orderNumber)
        : undefined,
      propertyId: isSet(object.propertyId)
        ? Number(object.propertyId)
        : undefined,
    };
  },

  toJSON(message: S3SinkData): unknown {
    const obj: any = {};
    message.correlationId !== undefined &&
      (obj.correlationId = message.correlationId);
    message.success !== undefined && (obj.success = message.success);
    message.message !== undefined && (obj.message = message.message);
    message.s3Path !== undefined && (obj.s3Path = message.s3Path);
    message.orderNumber !== undefined &&
      (obj.orderNumber = Math.round(message.orderNumber));
    message.propertyId !== undefined &&
      (obj.propertyId = Math.round(message.propertyId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3SinkData>, I>>(
    object: I
  ): S3SinkData {
    const message = createBaseS3SinkData();
    message.correlationId = object.correlationId ?? "";
    message.success = object.success ?? false;
    message.message = object.message ?? "";
    message.s3Path = object.s3Path ?? "";
    message.orderNumber = object.orderNumber ?? undefined;
    message.propertyId = object.propertyId ?? undefined;
    return message;
  },
};

function createBaseS3RemoveData(): S3RemoveData {
  return { s3Path: "" };
}

export const S3RemoveData = {
  encode(
    message: S3RemoveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.s3Path !== "") {
      writer.uint32(10).string(message.s3Path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3RemoveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3RemoveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.s3Path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3RemoveData {
    return {
      s3Path: isSet(object.s3Path) ? String(object.s3Path) : "",
    };
  },

  toJSON(message: S3RemoveData): unknown {
    const obj: any = {};
    message.s3Path !== undefined && (obj.s3Path = message.s3Path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3RemoveData>, I>>(
    object: I
  ): S3RemoveData {
    const message = createBaseS3RemoveData();
    message.s3Path = object.s3Path ?? "";
    return message;
  },
};

function createBaseS3ProcessResult(): S3ProcessResult {
  return { results: [] };
}

export const S3ProcessResult = {
  encode(
    message: S3ProcessResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.results) {
      S3ProcessResult_Result.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3ProcessResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3ProcessResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(
            S3ProcessResult_Result.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3ProcessResult {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => S3ProcessResult_Result.fromJSON(e))
        : [],
    };
  },

  toJSON(message: S3ProcessResult): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? S3ProcessResult_Result.toJSON(e) : undefined
      );
    } else {
      obj.results = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3ProcessResult>, I>>(
    object: I
  ): S3ProcessResult {
    const message = createBaseS3ProcessResult();
    message.results =
      object.results?.map((e) => S3ProcessResult_Result.fromPartial(e)) || [];
    return message;
  },
};

function createBaseS3ProcessResult_Result(): S3ProcessResult_Result {
  return {
    correlationId: "",
    filePath: "",
    fileSize: 0,
    fileSha1: "",
    s3ExifData: undefined,
    s3UploadData: undefined,
    thumbnailPath: "",
    thumbnailSize: 0,
    imageHeight: 0,
    imageWidth: 0,
    errorCode: 0,
    errorMessage: "",
  };
}

export const S3ProcessResult_Result = {
  encode(
    message: S3ProcessResult_Result,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.correlationId !== "") {
      writer.uint32(10).string(message.correlationId);
    }
    if (message.filePath !== "") {
      writer.uint32(18).string(message.filePath);
    }
    if (message.fileSize !== 0) {
      writer.uint32(24).int64(message.fileSize);
    }
    if (message.fileSha1 !== "") {
      writer.uint32(34).string(message.fileSha1);
    }
    if (message.s3ExifData !== undefined) {
      S3ExifData.encode(message.s3ExifData, writer.uint32(42).fork()).ldelim();
    }
    if (message.s3UploadData !== undefined) {
      S3UploadData.encode(
        message.s3UploadData,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.thumbnailPath !== "") {
      writer.uint32(58).string(message.thumbnailPath);
    }
    if (message.thumbnailSize !== 0) {
      writer.uint32(64).int64(message.thumbnailSize);
    }
    if (message.imageHeight !== 0) {
      writer.uint32(72).int64(message.imageHeight);
    }
    if (message.imageWidth !== 0) {
      writer.uint32(80).int64(message.imageWidth);
    }
    if (message.errorCode !== 0) {
      writer.uint32(800).int32(message.errorCode);
    }
    if (message.errorMessage !== "") {
      writer.uint32(810).string(message.errorMessage);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3ProcessResult_Result {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3ProcessResult_Result();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.correlationId = reader.string();
          break;
        case 2:
          message.filePath = reader.string();
          break;
        case 3:
          message.fileSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.fileSha1 = reader.string();
          break;
        case 5:
          message.s3ExifData = S3ExifData.decode(reader, reader.uint32());
          break;
        case 6:
          message.s3UploadData = S3UploadData.decode(reader, reader.uint32());
          break;
        case 7:
          message.thumbnailPath = reader.string();
          break;
        case 8:
          message.thumbnailSize = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.imageHeight = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.imageWidth = longToNumber(reader.int64() as Long);
          break;
        case 100:
          message.errorCode = reader.int32();
          break;
        case 101:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3ProcessResult_Result {
    return {
      correlationId: isSet(object.correlationId)
        ? String(object.correlationId)
        : "",
      filePath: isSet(object.filePath) ? String(object.filePath) : "",
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      fileSha1: isSet(object.fileSha1) ? String(object.fileSha1) : "",
      s3ExifData: isSet(object.s3ExifData)
        ? S3ExifData.fromJSON(object.s3ExifData)
        : undefined,
      s3UploadData: isSet(object.s3UploadData)
        ? S3UploadData.fromJSON(object.s3UploadData)
        : undefined,
      thumbnailPath: isSet(object.thumbnailPath)
        ? String(object.thumbnailPath)
        : "",
      thumbnailSize: isSet(object.thumbnailSize)
        ? Number(object.thumbnailSize)
        : 0,
      imageHeight: isSet(object.imageHeight) ? Number(object.imageHeight) : 0,
      imageWidth: isSet(object.imageWidth) ? Number(object.imageWidth) : 0,
      errorCode: isSet(object.errorCode) ? Number(object.errorCode) : 0,
      errorMessage: isSet(object.errorMessage)
        ? String(object.errorMessage)
        : "",
    };
  },

  toJSON(message: S3ProcessResult_Result): unknown {
    const obj: any = {};
    message.correlationId !== undefined &&
      (obj.correlationId = message.correlationId);
    message.filePath !== undefined && (obj.filePath = message.filePath);
    message.fileSize !== undefined &&
      (obj.fileSize = Math.round(message.fileSize));
    message.fileSha1 !== undefined && (obj.fileSha1 = message.fileSha1);
    message.s3ExifData !== undefined &&
      (obj.s3ExifData = message.s3ExifData
        ? S3ExifData.toJSON(message.s3ExifData)
        : undefined);
    message.s3UploadData !== undefined &&
      (obj.s3UploadData = message.s3UploadData
        ? S3UploadData.toJSON(message.s3UploadData)
        : undefined);
    message.thumbnailPath !== undefined &&
      (obj.thumbnailPath = message.thumbnailPath);
    message.thumbnailSize !== undefined &&
      (obj.thumbnailSize = Math.round(message.thumbnailSize));
    message.imageHeight !== undefined &&
      (obj.imageHeight = Math.round(message.imageHeight));
    message.imageWidth !== undefined &&
      (obj.imageWidth = Math.round(message.imageWidth));
    message.errorCode !== undefined &&
      (obj.errorCode = Math.round(message.errorCode));
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3ProcessResult_Result>, I>>(
    object: I
  ): S3ProcessResult_Result {
    const message = createBaseS3ProcessResult_Result();
    message.correlationId = object.correlationId ?? "";
    message.filePath = object.filePath ?? "";
    message.fileSize = object.fileSize ?? 0;
    message.fileSha1 = object.fileSha1 ?? "";
    message.s3ExifData =
      object.s3ExifData !== undefined && object.s3ExifData !== null
        ? S3ExifData.fromPartial(object.s3ExifData)
        : undefined;
    message.s3UploadData =
      object.s3UploadData !== undefined && object.s3UploadData !== null
        ? S3UploadData.fromPartial(object.s3UploadData)
        : undefined;
    message.thumbnailPath = object.thumbnailPath ?? "";
    message.thumbnailSize = object.thumbnailSize ?? 0;
    message.imageHeight = object.imageHeight ?? 0;
    message.imageWidth = object.imageWidth ?? 0;
    message.errorCode = object.errorCode ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

function createBaseS3UploadStatusData(): S3UploadStatusData {
  return { correlationId: "", orderNumber: undefined, propertyId: undefined };
}

export const S3UploadStatusData = {
  encode(
    message: S3UploadStatusData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.correlationId !== "") {
      writer.uint32(10).string(message.correlationId);
    }
    if (message.orderNumber !== undefined) {
      writer.uint32(800).int64(message.orderNumber);
    }
    if (message.propertyId !== undefined) {
      writer.uint32(808).int64(message.propertyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3UploadStatusData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3UploadStatusData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.correlationId = reader.string();
          break;
        case 100:
          message.orderNumber = longToNumber(reader.int64() as Long);
          break;
        case 101:
          message.propertyId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3UploadStatusData {
    return {
      correlationId: isSet(object.correlationId)
        ? String(object.correlationId)
        : "",
      orderNumber: isSet(object.orderNumber)
        ? Number(object.orderNumber)
        : undefined,
      propertyId: isSet(object.propertyId)
        ? Number(object.propertyId)
        : undefined,
    };
  },

  toJSON(message: S3UploadStatusData): unknown {
    const obj: any = {};
    message.correlationId !== undefined &&
      (obj.correlationId = message.correlationId);
    message.orderNumber !== undefined &&
      (obj.orderNumber = Math.round(message.orderNumber));
    message.propertyId !== undefined &&
      (obj.propertyId = Math.round(message.propertyId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3UploadStatusData>, I>>(
    object: I
  ): S3UploadStatusData {
    const message = createBaseS3UploadStatusData();
    message.correlationId = object.correlationId ?? "";
    message.orderNumber = object.orderNumber ?? undefined;
    message.propertyId = object.propertyId ?? undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
