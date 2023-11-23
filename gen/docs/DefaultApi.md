# ScheduleApi.DefaultApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coursesGet**](DefaultApi.md#coursesGet) | **GET** /courses/ | 
[**coursesPost**](DefaultApi.md#coursesPost) | **POST** /courses/ | 
[**coursesPut**](DefaultApi.md#coursesPut) | **PUT** /courses/ | 
[**studentsIdScheduleGet**](DefaultApi.md#studentsIdScheduleGet) | **GET** /students/{id}/schedule | 



## coursesGet

> coursesGet()





### Example

```javascript
import ScheduleApi from 'schedule_api';

let apiInstance = new ScheduleApi.DefaultApi();
apiInstance.coursesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## coursesPost

> coursesPost()





### Example

```javascript
import ScheduleApi from 'schedule_api';

let apiInstance = new ScheduleApi.DefaultApi();
apiInstance.coursesPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## coursesPut

> coursesPut()





### Example

```javascript
import ScheduleApi from 'schedule_api';

let apiInstance = new ScheduleApi.DefaultApi();
apiInstance.coursesPut((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## studentsIdScheduleGet

> studentsIdScheduleGet(id, opts)





### Example

```javascript
import ScheduleApi from 'schedule_api';

let apiInstance = new ScheduleApi.DefaultApi();
let id = "id_example"; // String | 
let opts = {
  'from': "from_example", // String | 
  'to': "to_example" // String | 
};
apiInstance.studentsIdScheduleGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **from** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

