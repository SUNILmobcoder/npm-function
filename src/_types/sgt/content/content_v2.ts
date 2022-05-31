/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "sgt.content.v2";

export enum Rotate {
  ROTATE_NONE = 0,
  ROTATE_90 = 1,
  ROTATE_180 = 2,
  ROTATE_270 = 3,
  UNRECOGNIZED = -1,
}

export function rotateFromJSON(object: any): Rotate {
  switch (object) {
    case 0:
    case "ROTATE_NONE":
      return Rotate.ROTATE_NONE;
    case 1:
    case "ROTATE_90":
      return Rotate.ROTATE_90;
    case 2:
    case "ROTATE_180":
      return Rotate.ROTATE_180;
    case 3:
    case "ROTATE_270":
      return Rotate.ROTATE_270;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Rotate.UNRECOGNIZED;
  }
}

export function rotateToJSON(object: Rotate): string {
  switch (object) {
    case Rotate.ROTATE_NONE:
      return "ROTATE_NONE";
    case Rotate.ROTATE_90:
      return "ROTATE_90";
    case Rotate.ROTATE_180:
      return "ROTATE_180";
    case Rotate.ROTATE_270:
      return "ROTATE_270";
    default:
      return "UNKNOWN";
  }
}

export interface VendorWebImageData {
  statusReportId: number;
  documentType: string;
  sortOrder: number;
  hashKey: string;
  documentExtendedAttribute: string;
  uploadKey: string;
  annotationLabel: string;
  annotationText: string;
}

export interface InspiImageData {
  isFrontOfHouse: boolean;
  mainVendorCode: string;
  vendorCodeUploaded: string;
}

/**
 * *****************************
 * Update
 */
export interface UpdateMetadata {
  orderNumber: number;
  propertyId: number;
  imageType: number;
  imageWidth: number;
  imageHeight: number;
  contractorId: number;
  departmentCode: string;
  description: string;
  prefix: string;
  category: string;
  scanDate: Date | undefined;
  releaseDate: Date | undefined;
  source: string;
  guid: string;
}

function createBaseVendorWebImageData(): VendorWebImageData {
  return {
    statusReportId: 0,
    documentType: "",
    sortOrder: 0,
    hashKey: "",
    documentExtendedAttribute: "",
    uploadKey: "",
    annotationLabel: "",
    annotationText: "",
  };
}

export const VendorWebImageData = {
  encode(
    message: VendorWebImageData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.statusReportId !== 0) {
      writer.uint32(8).int64(message.statusReportId);
    }
    if (message.documentType !== "") {
      writer.uint32(18).string(message.documentType);
    }
    if (message.sortOrder !== 0) {
      writer.uint32(24).int64(message.sortOrder);
    }
    if (message.hashKey !== "") {
      writer.uint32(34).string(message.hashKey);
    }
    if (message.documentExtendedAttribute !== "") {
      writer.uint32(42).string(message.documentExtendedAttribute);
    }
    if (message.uploadKey !== "") {
      writer.uint32(50).string(message.uploadKey);
    }
    if (message.annotationLabel !== "") {
      writer.uint32(58).string(message.annotationLabel);
    }
    if (message.annotationText !== "") {
      writer.uint32(66).string(message.annotationText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VendorWebImageData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVendorWebImageData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statusReportId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.documentType = reader.string();
          break;
        case 3:
          message.sortOrder = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.hashKey = reader.string();
          break;
        case 5:
          message.documentExtendedAttribute = reader.string();
          break;
        case 6:
          message.uploadKey = reader.string();
          break;
        case 7:
          message.annotationLabel = reader.string();
          break;
        case 8:
          message.annotationText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VendorWebImageData {
    return {
      statusReportId: isSet(object.statusReportId)
        ? Number(object.statusReportId)
        : 0,
      documentType: isSet(object.documentType)
        ? String(object.documentType)
        : "",
      sortOrder: isSet(object.sortOrder) ? Number(object.sortOrder) : 0,
      hashKey: isSet(object.hashKey) ? String(object.hashKey) : "",
      documentExtendedAttribute: isSet(object.documentExtendedAttribute)
        ? String(object.documentExtendedAttribute)
        : "",
      uploadKey: isSet(object.uploadKey) ? String(object.uploadKey) : "",
      annotationLabel: isSet(object.annotationLabel)
        ? String(object.annotationLabel)
        : "",
      annotationText: isSet(object.annotationText)
        ? String(object.annotationText)
        : "",
    };
  },

  toJSON(message: VendorWebImageData): unknown {
    const obj: any = {};
    message.statusReportId !== undefined &&
      (obj.statusReportId = Math.round(message.statusReportId));
    message.documentType !== undefined &&
      (obj.documentType = message.documentType);
    message.sortOrder !== undefined &&
      (obj.sortOrder = Math.round(message.sortOrder));
    message.hashKey !== undefined && (obj.hashKey = message.hashKey);
    message.documentExtendedAttribute !== undefined &&
      (obj.documentExtendedAttribute = message.documentExtendedAttribute);
    message.uploadKey !== undefined && (obj.uploadKey = message.uploadKey);
    message.annotationLabel !== undefined &&
      (obj.annotationLabel = message.annotationLabel);
    message.annotationText !== undefined &&
      (obj.annotationText = message.annotationText);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VendorWebImageData>, I>>(
    object: I
  ): VendorWebImageData {
    const message = createBaseVendorWebImageData();
    message.statusReportId = object.statusReportId ?? 0;
    message.documentType = object.documentType ?? "";
    message.sortOrder = object.sortOrder ?? 0;
    message.hashKey = object.hashKey ?? "";
    message.documentExtendedAttribute = object.documentExtendedAttribute ?? "";
    message.uploadKey = object.uploadKey ?? "";
    message.annotationLabel = object.annotationLabel ?? "";
    message.annotationText = object.annotationText ?? "";
    return message;
  },
};

function createBaseInspiImageData(): InspiImageData {
  return { isFrontOfHouse: false, mainVendorCode: "", vendorCodeUploaded: "" };
}

export const InspiImageData = {
  encode(
    message: InspiImageData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isFrontOfHouse === true) {
      writer.uint32(8).bool(message.isFrontOfHouse);
    }
    if (message.mainVendorCode !== "") {
      writer.uint32(18).string(message.mainVendorCode);
    }
    if (message.vendorCodeUploaded !== "") {
      writer.uint32(26).string(message.vendorCodeUploaded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InspiImageData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInspiImageData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isFrontOfHouse = reader.bool();
          break;
        case 2:
          message.mainVendorCode = reader.string();
          break;
        case 3:
          message.vendorCodeUploaded = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InspiImageData {
    return {
      isFrontOfHouse: isSet(object.isFrontOfHouse)
        ? Boolean(object.isFrontOfHouse)
        : false,
      mainVendorCode: isSet(object.mainVendorCode)
        ? String(object.mainVendorCode)
        : "",
      vendorCodeUploaded: isSet(object.vendorCodeUploaded)
        ? String(object.vendorCodeUploaded)
        : "",
    };
  },

  toJSON(message: InspiImageData): unknown {
    const obj: any = {};
    message.isFrontOfHouse !== undefined &&
      (obj.isFrontOfHouse = message.isFrontOfHouse);
    message.mainVendorCode !== undefined &&
      (obj.mainVendorCode = message.mainVendorCode);
    message.vendorCodeUploaded !== undefined &&
      (obj.vendorCodeUploaded = message.vendorCodeUploaded);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InspiImageData>, I>>(
    object: I
  ): InspiImageData {
    const message = createBaseInspiImageData();
    message.isFrontOfHouse = object.isFrontOfHouse ?? false;
    message.mainVendorCode = object.mainVendorCode ?? "";
    message.vendorCodeUploaded = object.vendorCodeUploaded ?? "";
    return message;
  },
};

function createBaseUpdateMetadata(): UpdateMetadata {
  return {
    orderNumber: 0,
    propertyId: 0,
    imageType: 0,
    imageWidth: 0,
    imageHeight: 0,
    contractorId: 0,
    departmentCode: "",
    description: "",
    prefix: "",
    category: "",
    scanDate: undefined,
    releaseDate: undefined,
    source: "",
    guid: "",
  };
}

export const UpdateMetadata = {
  encode(
    message: UpdateMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderNumber !== 0) {
      writer.uint32(8).int64(message.orderNumber);
    }
    if (message.propertyId !== 0) {
      writer.uint32(16).int64(message.propertyId);
    }
    if (message.imageType !== 0) {
      writer.uint32(24).int64(message.imageType);
    }
    if (message.imageWidth !== 0) {
      writer.uint32(32).int64(message.imageWidth);
    }
    if (message.imageHeight !== 0) {
      writer.uint32(40).int64(message.imageHeight);
    }
    if (message.contractorId !== 0) {
      writer.uint32(48).int64(message.contractorId);
    }
    if (message.departmentCode !== "") {
      writer.uint32(58).string(message.departmentCode);
    }
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.prefix !== "") {
      writer.uint32(74).string(message.prefix);
    }
    if (message.category !== "") {
      writer.uint32(82).string(message.category);
    }
    if (message.scanDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.scanDate),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.releaseDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.releaseDate),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(106).string(message.source);
    }
    if (message.guid !== "") {
      writer.uint32(114).string(message.guid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderNumber = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.propertyId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.imageType = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.imageWidth = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.imageHeight = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.contractorId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.departmentCode = reader.string();
          break;
        case 8:
          message.description = reader.string();
          break;
        case 9:
          message.prefix = reader.string();
          break;
        case 10:
          message.category = reader.string();
          break;
        case 11:
          message.scanDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.releaseDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.source = reader.string();
          break;
        case 14:
          message.guid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateMetadata {
    return {
      orderNumber: isSet(object.orderNumber) ? Number(object.orderNumber) : 0,
      propertyId: isSet(object.propertyId) ? Number(object.propertyId) : 0,
      imageType: isSet(object.imageType) ? Number(object.imageType) : 0,
      imageWidth: isSet(object.imageWidth) ? Number(object.imageWidth) : 0,
      imageHeight: isSet(object.imageHeight) ? Number(object.imageHeight) : 0,
      contractorId: isSet(object.contractorId)
        ? Number(object.contractorId)
        : 0,
      departmentCode: isSet(object.departmentCode)
        ? String(object.departmentCode)
        : "",
      description: isSet(object.description) ? String(object.description) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      category: isSet(object.category) ? String(object.category) : "",
      scanDate: isSet(object.scanDate)
        ? fromJsonTimestamp(object.scanDate)
        : undefined,
      releaseDate: isSet(object.releaseDate)
        ? fromJsonTimestamp(object.releaseDate)
        : undefined,
      source: isSet(object.source) ? String(object.source) : "",
      guid: isSet(object.guid) ? String(object.guid) : "",
    };
  },

  toJSON(message: UpdateMetadata): unknown {
    const obj: any = {};
    message.orderNumber !== undefined &&
      (obj.orderNumber = Math.round(message.orderNumber));
    message.propertyId !== undefined &&
      (obj.propertyId = Math.round(message.propertyId));
    message.imageType !== undefined &&
      (obj.imageType = Math.round(message.imageType));
    message.imageWidth !== undefined &&
      (obj.imageWidth = Math.round(message.imageWidth));
    message.imageHeight !== undefined &&
      (obj.imageHeight = Math.round(message.imageHeight));
    message.contractorId !== undefined &&
      (obj.contractorId = Math.round(message.contractorId));
    message.departmentCode !== undefined &&
      (obj.departmentCode = message.departmentCode);
    message.description !== undefined &&
      (obj.description = message.description);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.category !== undefined && (obj.category = message.category);
    message.scanDate !== undefined &&
      (obj.scanDate = message.scanDate.toISOString());
    message.releaseDate !== undefined &&
      (obj.releaseDate = message.releaseDate.toISOString());
    message.source !== undefined && (obj.source = message.source);
    message.guid !== undefined && (obj.guid = message.guid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMetadata>, I>>(
    object: I
  ): UpdateMetadata {
    const message = createBaseUpdateMetadata();
    message.orderNumber = object.orderNumber ?? 0;
    message.propertyId = object.propertyId ?? 0;
    message.imageType = object.imageType ?? 0;
    message.imageWidth = object.imageWidth ?? 0;
    message.imageHeight = object.imageHeight ?? 0;
    message.contractorId = object.contractorId ?? 0;
    message.departmentCode = object.departmentCode ?? "";
    message.description = object.description ?? "";
    message.prefix = object.prefix ?? "";
    message.category = object.category ?? "";
    message.scanDate = object.scanDate ?? undefined;
    message.releaseDate = object.releaseDate ?? undefined;
    message.source = object.source ?? "";
    message.guid = object.guid ?? "";
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
