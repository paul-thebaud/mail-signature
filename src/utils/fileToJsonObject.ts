export default function fileToJsonObject<T extends object>(file: File): Promise<T> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      try {
        resolve(JSON.parse(reader.result as string));
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
}
