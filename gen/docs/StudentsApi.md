# ScheduleApi.StudentsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**studentsIdGet**](StudentsApi.md#studentsIdGet) | **GET** /students/{id} | 



## studentsIdGet

> Student studentsIdGet(id)



Endpoint to get a student by id

### Example

```javascript
import ScheduleApi from 'schedule_api';

let apiInstance = new ScheduleApi.StudentsApi();
let id = "id_example"; // String | Student id
apiInstance.studentsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Student id | 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml

