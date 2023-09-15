/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SuperAgent from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace ApiUser {
    interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class ApiUser {
    constructor(protected readonly _options: ApiUser.Options) {}

    /**
     * Create a new API user
     */
    public async create(): Promise<SuperAgent.ApiUser> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/api-users"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.0.99",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ApiUser.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SuperAgentError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a single api user
     */
    public async get(): Promise<SuperAgent.ApiUser> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/api-users/me"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.0.99",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ApiUser.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SuperAgentError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete an api user
     */
    public async delete(): Promise<unknown> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/api-users/me"),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.0.99",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SuperAgentError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}