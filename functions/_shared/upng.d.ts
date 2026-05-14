declare module 'upng-js' {
  interface UPNGImage {
    width: number
    height: number
    frames: object[]
    ctype: number
    depth: number
    tabs: object
    data: Uint8Array
  }

  function decode(buffer: ArrayBuffer): UPNGImage
  function toRGBA8(image: UPNGImage): ArrayBuffer[]
  function encode(
    frames: ArrayBuffer[],
    width: number,
    height: number,
    cnum: number,
  ): ArrayBuffer
}
