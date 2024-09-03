import { compress, decompress } from "cppzst";

export default {
  compress: async (encoder, compressionParameters) => {
    return compress(encoder.buffer, compressionParameters);
  },

  decompress: async (buffer, decompressionParameters) => {
    return decompress(buffer, decompressionParameters);
  },
};
