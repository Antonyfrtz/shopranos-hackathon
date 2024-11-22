const custom_login = {
    props: {
      model: Object,
      signupInternal: Boolean,
    },
    data() {
      return {
        id: this.generateUUID(),
        wrongCredentials: false,
        passwordLog: "",
        emailLog: "",
        emailError: -1,
        passwordError: -1,
        isloading: false,
        isLocked: false,
        signupInternal: this.signupInternal,
        passwordFieldType: 'password',  // Initial type set to 'password'
      };
    },
    mounted() {
      // Handle redirection based on the query string
      if (window.location.search.startsWith('?redirect=https://')) {
        window.location.href = window.location.search.split('?redirect=https://')[1];
      } else if (window.location.search.startsWith('?redirect=http://')) {
        window.location.href = window.location.search.split('?redirect=http://')[1];
      }
    },
    methods: {
      // Validate form inputs
      checkForm() {
        this.emailError = -1;
        this.passwordError = -1;
        let hasErrors = false;
        this.isLocked = false;
  
        // Email Regex
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
        // Email Validation
        if (this.emailLog.length === 0) {
          this.emailError = 1;
          hasErrors = true;
        } else if (!emailRegex.test(this.emailLog)) {
          this.emailError = 0;
          hasErrors = true;
        }
  
        // Password Validation
        if (this.passwordLog.length === 0) {
          this.passwordError = 0;
          hasErrors = true;
        }
  
        // If errors found, return
        if (hasErrors) return;
  
        // Set loading state
        this.isloading = true;
  
        let info = {
          Email: this.emailLog,
          Password: this.passwordLog,
        };
  
        // Simulate account login process (this method should be defined elsewhere)
        this._accountLogin(info, (e) => {
          if (e.error) {
            if (e.response && e.response.status === 409) {
              this.isLocked = true;
            } else {
              this.wrongCredentials = true;
            }
            this.isloading = false;
          } else {
            this.isloading = false;
            if (e.response.status !== 200) {
              this.passwordError = 1;
            } else {
              this.emailError = -1;
              this.passwordError = -1;
  
              const redirectUrl = new URL(window.location.href).searchParams.get('redirect');
              if (redirectUrl) {
                window.location.href = redirectUrl;
              } else {
                window.location.href = '/checkout';
              }
            }
          }
        });
      },
  
      // Generate a unique UUID
      generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      },
  
      // Toggle password visibility
      toggleVisibility() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
      },
  
      // Placeholder for login functionality (this should be defined in the parent or externally)
      _accountLogin(info, callback) {
        // For demo purposes, simulate an API call
        setTimeout(() => {
          // Simulate a successful login response
          callback({ response: { status: 200 } });
        }, 1500);
      },
    },
  };
  
  // Register the component
  app.component('custom_login', {
    extends: custom_login,
    template: '#custom_login',
  });
  