import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlLongtermretentionApi implements ICredentialType {
        name = 'N8nDevAzureSqlLongtermretentionApi';

        displayName = 'Azure SQL Longtermretention API';

        icon: Icon = { light: 'file:../nodes/AzureSqlLongtermretention/azure-sql-longtermretention.png', dark: 'file:../nodes/AzureSqlLongtermretention/azure-sql-longtermretention.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Longtermretention API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
