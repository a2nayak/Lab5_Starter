# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Name: Anirudh Nayak

1) No, I would not use a unit test to test the "message" feature of a messaging application. This is because the entire messaging feature is too large to fit within the scope of a unit test. Unit tests should test small elements of one's code, which lets tests run faster and allows one to identify the specific causes of a breaking build rather than simply acknowledging that the build is broken. 

2) Yes, I would use a unit test to test the "max message length" feature of a messaging application. This is because the behavior of this feature is simple and clearly defined, being small enough to place inside a unit test. Furthermore, the failure of this test helps developers narrow bugs down to only a few possible locations.