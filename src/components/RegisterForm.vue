<template>
    <div class="text-white text-center font-bold p-5 mb-4" v-if="registration_show_alert"
    :class="registration_alert_variant">
    {{ registration_alert_msg }}
    </div>
    <vee-form :validation-schema="registerSchema"
    @submit="register"
    :initial-values="userData">
    <!-- Name -->
    <div class="mb-3">
        <label class="inline-block mb-2">Name</label>
        <vee-field
        type="text"
        name="name"
        class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none
            focus:border-black
            rounded
        "
        placeholder="Enter Name"
        />
        <error-message class="text-red-600" name="name"/>
    </div>
    <!-- Email -->
    <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-field
        type="email"
        name="email"
        class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none
            focus:border-black
            rounded
        "
        placeholder="Enter Email"
        />
        <error-message class="text-red-600" name="email"/>
    </div>
    <!-- Age -->
    <div class="mb-3">
        <label class="inline-block mb-2">Age</label>
        <vee-field
        type="number"
        name="age"
        class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none
            focus:border-black
            rounded
        "
        />
        <error-message class="text-red-600" name="age"/>
    </div>
    <!-- Password -->
    <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-field
        name="password"
        :bails="false"
        v-slot="{ field, errors }"
        >
        <input
        type="password"
        class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none
            focus:border-black
            rounded
        "
        placeholder="Password"
        v-bind="field"
        />
        <div class="text-red-600" v-for="error in errors" :key="error">
            {{error}}
        </div>
        </vee-field>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
        <label class="inline-block mb-2">Confirm Password</label>
        <vee-field
        type="password"
        name="confirm_password"
        class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none
            focus:border-black
            rounded
        "
        placeholder="Confirm Password"
        />
        <error-message class="text-red-600" name="confirm_password"/>
    </div>
    <!-- Country -->
    <div class="mb-3">
        <label class="inline-block mb-2">Country</label>
        <vee-field as="select"
        name="country"
        class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none
            focus:border-black
            rounded
        "
        >
        <option value="USA">USA</option>
        <option value="Morocco">Morocco</option>
        <option value="Germany">Germany</option>
        <option value="Antractica">Antractica</option>
        </vee-field>
        <error-message class="text-red-600" name="country"/>
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
        <vee-field
        type="checkbox"
        name="tos"
        value="1"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded inline-block"
        />
        <label class="inline-block">Accept terms of service</label>
        <error-message class="text-red-600 block" name="tos"/>
    </div>
    <button
        type="submit"
        class="
        block
        w-full
        bg-purple-600
        text-white
        py-1.5
        px-3
        rounded
        transition
        hover:bg-purple-700
        "
        :disabled="registration_in_submission"
    >
        Submit
    </button>
    </vee-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      registerSchema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|email|min:5|max:100|email',
        age: 'required|min_value:18|max_value:100',
        password: 'required|min:4|max:100',
        confirm_password: 'passwords_mismatch:@password',
        country: 'required|county_excluded:Antractica',
        tos: 'tos',
      },
      userData: {
        country: 'Morocco',
      },
      registration_in_submission: false,
      registration_show_alert: false,
      registration_alert_variant: 'bg-blue-500',
      registration_alert_msg: 'Please wait! Your account is being created.',
    };
  },
  methods: {
    register(values) {
      this.registration_show_alert = true;
      this.registration_in_submission = true;
      this.registration_alert_variant = 'bg-blue-500';
      this.registration_alert_msg = 'Please wait! Your account is being created.';

      this.registration_alert_variant = 'bg-green-500';
      this.registration_alert_msg = 'Success! Your account has been created.';
      console.log(values);
    },
  },
};
</script>

<style>

</style>
