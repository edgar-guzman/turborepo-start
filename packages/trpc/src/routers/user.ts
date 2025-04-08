import { z } from "zod";

import { publicProcedure } from "../procedure";
import { router } from "../rpc";

export const userRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z
          .string()
          .min(2, {
            message: "Name must be at least 2 characters long",
          })
          .max(50, {
            message: "Name can't exceed 50 characters long",
          }),

        email: z
          .string()
          .email()
          .min(2, {
            message: "Name must be at least 2 characters long",
          })
          .max(50, {
            message: "Name can't exceed 50 characters long",
          }),

        password: z
          .string()
          .min(8, {
            message: "Name must be at least 8 characters long",
          })
          .max(50, {
            message: "Name can't exceed 50 characters long",
          }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: input.password,
        },
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string().cuid(),

        name: z
          .string()
          .min(2, {
            message: "Name must be at least 2 characters long",
          })
          .max(50, {
            message: "Name can't exceed 50 characters long",
          }),

        email: z
          .string()
          .email()
          .min(2, {
            message: "Name must be at least 2 characters long",
          })
          .max(50, {
            message: "Name can't exceed 50 characters long",
          }),

        password: z
          .string()
          .min(8, {
            message: "Name must be at least 8 characters long",
          })
          .max(50, {
            message: "Name can't exceed 50 characters long",
          }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          email: input.email,
          password: input.password,
        },
      });
    }),
});
