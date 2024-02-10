import * as zod from "zod";

export const loginSchema = zod.object({
  username: zod.string({
    required_error: "Username wajib diisi",
  }),
  password: zod.string({
    required_error: "password wajib diisi",
  }),
});
