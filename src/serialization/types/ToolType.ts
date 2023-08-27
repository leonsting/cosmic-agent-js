/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const ToolType: core.serialization.Schema<serializers.ToolType.Raw, SuperAgent.ToolType> =
    core.serialization.enum_([
        "BROWSER",
        "SEARCH",
        "WOLFRAM_ALPHA",
        "REPLICATE",
        "ZAPIER_NLA",
        "AGENT",
        "OPENAPI",
        "CHATGPT_PLUGIN",
        "METAPHOR",
    ]);

export declare namespace ToolType {
    type Raw =
        | "BROWSER"
        | "SEARCH"
        | "WOLFRAM_ALPHA"
        | "REPLICATE"
        | "ZAPIER_NLA"
        | "AGENT"
        | "OPENAPI"
        | "CHATGPT_PLUGIN"
        | "METAPHOR";
}