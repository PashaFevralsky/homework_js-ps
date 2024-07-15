const hasLicence = true;
const age = 18;
const isDrunk = false;

canDrive = hasLicence && age >= 18 && !isDrunk;
if (canDrive) {
    console.log("Может вести");
} else {
    console.log("не может вести");
}
