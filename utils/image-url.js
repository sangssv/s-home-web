const CRM_ENDPOINT = process.env.CRM_ENDPOINT || 'http://localhost:1337';

export const getImageUrl = url => CRM_ENDPOINT + url;