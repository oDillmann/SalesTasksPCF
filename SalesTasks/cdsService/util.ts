import { IColumn } from "@fluentui/react";


export const base64ToUrl = (base64: string, type: string) => {
  const blob = base64ToBlob(base64, type);
  const url = URL.createObjectURL(blob);
  return url;
};

export const base64ToBlob = (base64Content: string, contentType: string) => {
  const sliceSize = 512;
  const byteCharacters = atob(base64Content);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

export const EncodeFile = (file: File): Promise<Uint8Array> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const array = new Uint8Array(arrayBuffer);
      // this is the first request. We are passing content as null.
      resolve(array);
    };
    reader.onerror = error => reject(error);
    reader.readAsArrayBuffer(file);
  });
};

export const CollectionNameFromLogicalName = (
  entityLogicalName: string
): string => {
  if (entityLogicalName[entityLogicalName.length - 1] != "s") {
    return `${entityLogicalName}s`;
  } else {
    return `${entityLogicalName}es`;
  }
};

export const GetFileExtension = (fileName: string): string => {
  return <string>fileName.split(".").pop();
};

export const TrimFileExtension = (fileName: string): string => {
  return <string>fileName.split(".")[0];
};

