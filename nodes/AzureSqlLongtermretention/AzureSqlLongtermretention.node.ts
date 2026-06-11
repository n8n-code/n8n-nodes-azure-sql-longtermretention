import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlLongtermretention implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Longtermretention',
		name: 'N8nDevAzureSqlLongtermretention',
		icon: { light: 'file:./azure-sql-longtermretention.png', dark: 'file:./azure-sql-longtermretention.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure SQL Database management API provides RESTful web APIs for database CRUD operations.',
		defaults: { name: 'Azure SQL Longtermretention' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlLongtermretentionApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
