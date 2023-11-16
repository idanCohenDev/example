export class ImagesUtils {
 public static validateQueryParams(page: number) {
  if (!page && page !== 0) return "Page number is required";
  if (typeof Number(page) !== "number") return "Page number must be a number";
  return null;
 }
}
