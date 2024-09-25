import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  ngOnInit() {
    // Show the modal on page load
    const registrationModal = new bootstrap.Modal(document.getElementById('registrationModal'));
    registrationModal.show();
  }

  // Handle user registration logic
  registerUser() {
    // Perform your registration logic here
    alert('User registered successfully!');

    // Hide the modal after registration
    const registrationModal = bootstrap.Modal.getInstance(document.getElementById('registrationModal'));
    registrationModal.hide();
  }
}
