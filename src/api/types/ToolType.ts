/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An enumeration.
 */
export type ToolType =
    | "BROWSER"
    | "BING_SEARCH"
    | "REPLICATE"
    | "WOLFRAM_ALPHA"
    | "ZAPIER_NLA"
    | "AGENT"
    | "OPENAPI"
    | "CHATGPT_PLUGIN"
    | "METAPHOR"
    | "PUBMED";

export const ToolType = {
    Browser: "BROWSER",
    BingSearch: "BING_SEARCH",
    Replicate: "REPLICATE",
    WolframAlpha: "WOLFRAM_ALPHA",
    ZapierNla: "ZAPIER_NLA",
    Agent: "AGENT",
    Openapi: "OPENAPI",
    ChatgptPlugin: "CHATGPT_PLUGIN",
    Metaphor: "METAPHOR",
    Pubmed: "PUBMED",
} as const;