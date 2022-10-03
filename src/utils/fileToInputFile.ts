export type InputFile = {
  name: string,
  base64: string,
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result as string);
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
}

export default async function fileToInputFile(file: File): Promise<InputFile> {
  return {
    name: file.name,
    base64: await fileToBase64(file),
  };
}
