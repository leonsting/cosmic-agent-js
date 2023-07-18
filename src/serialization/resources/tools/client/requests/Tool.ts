/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SuperAgent from "../../../../../api";
import * as core from "../../../../../core";

export const Tool: core.serialization.Schema<serializers.Tool.Raw, SuperAgent.Tool> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.string(),
    description: core.serialization.string(),
    authorization: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace Tool {
    interface Raw {
        name: string;
        type: string;
        description: string;
        authorization?: Record<string, unknown> | null;
        metadata?: Record<string, unknown> | null;
    }
}
