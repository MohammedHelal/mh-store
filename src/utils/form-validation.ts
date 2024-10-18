export function isNameValid(name: FormDataEntryValue) {
  return name !== "";
}

export function isEmailValid(email: FormDataEntryValue) {
  const regex = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/g;
  return regex.test(email);
}

export function isAddressValid(address: FormDataEntryValue) {
  return address !== "";
}

export function isPostalValid(postal: FormDataEntryValue) {
  return postal !== "";
}

export function isCityValid(city: FormDataEntryValue) {
  return city !== "";
}

export function isTextValid(text: FormDataEntryValue) {
  return text !== "";
}
