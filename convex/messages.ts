import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Mutation to save a transcript
export const saveTranscript = mutation({
  args: {
    userId: v.string(),
    messages: v.array(
      v.object({
        content: v.string(),
        role: v.string(),
        timestamp: v.optional(v.number()),
      })
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", {
      userId: args.userId,
      messages: args.messages,
      createdAt: Date.now(),
    });
  },
});

// Query to get all transcripts for a user
export const getTranscripts = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("messages")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});