Unit Testing
============

In this assignment, you are going write unit tests using the Jasmine testing framework, Karma, and PhantomJS.

### ReviewsReport (non-Angular)

First, you are going to revisit the `ReviewsReport` constructor assignment. Write tests for the following methods using similarly structured data as in the Reviews Report assignment:

* `report.getAverageRating()`
* `report.getAverageCost()`
* `report.convertCostToDollarSign()`
	* Be sure to cover all code paths that the method can take. There should be a test for each if/else branch.
* `report.summarize()`
	* Use the same data that I provided last time.

Here is the solution to the previous assignment if you'd like to start with this instead of your own:

[https://bitbucket.org/skaterdav85/reviews-report-constructor/src/8c1aaee74f5585c5637bbbfb9f9503a337622a80/ReviewsReport.js?at=master](https://bitbucket.org/skaterdav85/reviews-report-constructor/src/8c1aaee74f5585c5637bbbfb9f9503a337622a80/ReviewsReport.js?at=master)

### orders.getTotalSpent() (Angular)

Create a unit using `$httpBackend` for the following Angular service:

Create an Angular service using `.factory()` called `orders` with a method `getTotalSpent()`. This method will make an HTTP GET request to `https://some-shopping-site.com/orders` and will respond with the following JSON:

```json
{
	"orders": [
		{ "id": "1234", "total": 56.99 },
		{ "id": "1234", "total": 6.99 },
		{ "id": "1234", "total": 5.99 },
		{ "id": "1234", "total": 9.00 },
		{ "id": "1234", "total": 8.03 },
		{ "id": "1234", "total": 87.00 }
	]
}
```

This method should resolve with a single number that is the sum of the `total` property for all orders.

### Submission

Submit your assignment to the TA and myself (dtang@usc.edu) as a zip file and __do not include the node_modules folder__.
