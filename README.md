#### Problem statement

##### broken functional composition:
* `compose` works bad in terms of that not only particular input matters, but also the whole(part of) application state is often used
> decision making process requires different app-state pieces

* `pipe` is not enough to express logic because of inputs-only availability
> regular pattern input meaning (as previous procedure output) often makes hard to distinguish different domain subjects

##### async task (activity) composed of multiple procedures invocation requires separate state management

#### primitives:
* procedure: sync function invocation within single execution stack
* activity: may contain async calls, in general sense is a composition of procedures invoked over time where each time slot is a procedure result

#### Solution attempt:
* each procedure has inputs and context. The input is transformed to output. The context is the number of options applied to transformation at the moment
> e.g. `findAdminUser(allUserdData, accountAdminKey)` has user data as input and output (user model), and a particular key (account model) to make a decision on how transform users to user
* assume that activity is a composition of multiple procedures
> e.g. `findBestTrip = compose(filterTripsByUserPreferences, fetchTrips, fetchUserPreferences)(bestTripPredicate)` where 'fetchSome' is considered as an async api call
* procedure context is activity input
* each activity has an associated output, pure in terms of both procedure input and context

#### examples:
* state selector (see **selector_example** folder):
> `node src/selector_example/run.js`
