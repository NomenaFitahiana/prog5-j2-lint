import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	{
		env: {
      	node: true,       
      	es2021: true
    	},
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
		rules: {
			"no-unused-vars": "error",
			"no-undef": "error",
			"camelcase": ["error", {
				properties: "always",
				ignoreDestructuring: false
			}],
			"new-cap": ["error", {
				newIsCap: true,
				capIsNew: false
			}],
			"id-match": ["error",
        "^[a-z][a-zA-Z0-9]*$|^[A-Z][a-zA-Z0-9]*$",
        {
        	onlyDeclarations: true,
          	properties: false,
          	classFields: false,
          	ignoreDestructuring: false
        }
			],
		},
	},
]);
