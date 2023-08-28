import { legacy_createStore as createStore } from "redux";

interface BookingFormState {
  name: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  state: string;
  email: string;
  plusServices: string[];
  interiorOption: string;
  exteriorOption: string;
  // Uncomment below if you need message
  // message: string;
}

const initialState: { bookingForm: BookingFormState } = {
  bookingForm: {
    name: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    state: "",
    email: "",
    plusServices: [],
    interiorOption: "NA",
    exteriorOption: "NA",
    // message: '',
  },
};

interface SetFormDataAction {
  type: "SET_FORM_DATA";
  payload: BookingFormState;
}

type BookingFormAction = SetFormDataAction; // Add other action types here if you have multiple actions

function reducer(state = initialState, action: BookingFormAction) {
  switch (action.type) {
    case "SET_FORM_DATA":
      return { ...state, bookingForm: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
