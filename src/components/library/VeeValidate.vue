<template>
  <el-container>
    <el-header>vee-validate</el-header>
    <el-main>
      <el-col v-if="$route.params.subId === 'default'" class="mb-4">
        <el-header>Default</el-header>
        <Form @submit="onSubmit">
          <Field name="email" type="email" :rules="validateEmail" />
          <ErrorMessage name="email" />
          <button>Sign up</button>
        </Form>
      </el-col>

      <el-col v-else-if="$route.params.subId === 'form-level'" class="mb-4">
        <el-header
          >Form-Level Validation (vee-validate default component)</el-header
        >
        <Form :validation-schema="simpleSchema" @submit="onSubmit">
          <el-form-item label="email" prop="email">
            <Field name="email" />
            <ErrorMessage name="email" />
          </el-form-item>
          <el-form-item label="name" prop="name">
            <Field name="name" />
            <ErrorMessage name="name" />
          </el-form-item>
          <el-form-item label="password" prop="password">
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
          </el-form-item>
        </Form>
      </el-col>

      <el-col v-else-if="$route.params.subId === 'ui-library'" class="mb-4">
        <el-header
          >Form-Level Validation (element-plus + vee-validate)</el-header
        >
        <Form as="el-form" :validation-schema="schema" @submit="onSubmit">
          <Field v-slot="{ value, field, errorMessage }" name="email">
            <el-form-item :error="errorMessage" label="Email">
              <el-input
                placeholder="Email Address"
                v-bind="field"
                :model-value="value"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">submit</el-button>
            </el-form-item>
          </Field>
        </Form>
      </el-col>

      <el-col v-else-if="$route.params.subId === 'field-level'" class="mb-4">
        <el-header>Field-Level Validation</el-header>
        <Form>
          <Field name="email" :rules="rules"></Field>
          <ErrorMessage name="email" />
        </Form>
      </el-col>

      <el-col v-else-if="$route.params.subId === 'handling-forms'" class="mb-4">
        <el-header>Handling Forms</el-header>
        <Form
          v-slot="{ values }"
          :validation-schema="schemaTwo"
          @submit="onSubmit"
        >
          <div>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
          </div>
          <!-- print form values -->
          <pre>{{ values }}</pre>
        </Form>
      </el-col>

      <el-col
        v-else-if="$route.params.subId === 'using-handle-submit'"
        class="mb-4"
      >
        <el-header>Using Handle Submit</el-header>
        <Form v-slot="{ handleSubmit }" :validation-schema="schema" as="div">
          <form @submit="handleSubmit($event, onSubmit)">
            <div>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <Field name="password" type="password" />
              <ErrorMessage name="password" />
            </div>
            <button>Submit</button>
          </form>
        </Form>
      </el-col>

      <el-col v-else-if="$route.params.subId === 'using-validate'" class="mb-4">
        <el-header>Using Validate</el-header>
        <Form
          v-slot="{ validate }"
          :validation-schema="schema"
          :initial-values="formValues"
        >
          <div>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="button" @click="validate">Submit</button>
        </Form>
      </el-col>

      <el-col v-else-if="$route.params.subId === 'using-submit'" class="mb-4">
        <el-header>Using Submit (setValues)</el-header>
        <Form @submit="setValues">
          <div>
            <Field name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <Field name="password" />
            <ErrorMessage name="password" />
          </div>
          <button>Submit</button>
        </Form>
      </el-col>

      <el-col v-else-if="$route.params.subId === 'handling-reset'" class="mb-4">
        <el-header>Handling Reset (handleReset)</el-header>
        <Form v-slot="{ handleReset }" :validation-schema="schema">
          <div>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="button" @click="handleReset">Reset</button>
        </Form>
      </el-col>

      <el-col v-else-if="$route.params.subId === 'setting-errors'" class="mb-4">
        <el-header>Setting Errors</el-header>
        <Form v-slot="{ setFieldError, setErrors }">
          <div>
            <Field name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <Field name="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="button" @click="setFieldError('email', 'nope')">
            Set Single Error
          </button>
          <button
            type="button"
            @click="setErrors({ email: 'nope', password: 'wrong' })"
          >
            Set Multiple Errors
          </button>
        </Form>
      </el-col>

      <el-col v-else-if="$route.params.subId === 'validation'" class="mb-4">
        <el-header>Validation</el-header>
        <input v-model="fieldValue" placeholder="Type something" />
        <span>{{ fieldErrorMessage }}</span>
      </el-col>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Form, Field, ErrorMessage, FormActions, useField } from "vee-validate";
import { defineComponent } from "vue";
// https://vee-validate.logaretm.com/v4/guide/best-practices
import { string, object, boolean } from "yup";

export default defineComponent({
  name: "VeeValidate",
  components: { Form, Field, ErrorMessage },
  setup() {
    // rules yup 으로 작성 기본 예시
    const rules = string().email().required();

    // rules 다양한 작성 예시
    const simpleSchema = {
      email: string().email().required(),
      name(value: string) {
        if (!value) {
          return "이름이 입력되지 않았습니다.";
        }
        return true;
      },
      password: "required|min:8",
    };

    // rules yup 사용한 다앙한 예시
    const schema = object({
      email: string().required().email().label("Email Address"),
      fullName: string().required().label("Full name"),
      password: string().required().min(6).label("Password"),
      terms: boolean()
        .required()
        .isTrue("You must agree to terms and conditions")
        .label("terms agreement"),
      subscribed: boolean()
        .required()
        .isTrue("This is unusal but you have to subscribe")
        .label("subscription agreement"),
    });

    const schemaTwo = object({
      email: string().required().email(),
      password: string().required().min(8),
    });

    // initial values
    const formValues = {
      email: "example@example.com",
      password: "",
    };

    const validateField = (value: string) => {
      if (!value) {
        return "this field is required";
      }
      if (value.length < 8) {
        return "this field must contain at least 8 characters";
      }
      return true;
    };

    const { value: fieldValue, errorMessage: fieldErrorMessage } = useField(
      "email",
      validateField
    );

    return {
      schema,
      simpleSchema,
      rules,
      schemaTwo,
      formValues,
      fieldValue,
      fieldErrorMessage,
    };
  },
  methods: {
    // onSubmit 예시
    onSubmit(values: Record<string, unknown>) {
      console.log("onSubmit", values);
      console.log(JSON.stringify(values, null, 2));
    },
    // rules 기본 작성 예시
    validateEmail(value: string) {
      // if the field is empty
      if (!value) {
        return `This field is required`;
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return `This field must be a valid email`;
      }
      // All is good
      return true;
    },
    setValues(
      values: Record<string, unknown>,
      actions: FormActions<Record<string, unknown>>
    ) {
      // Submit the values...
      // set single field value
      actions.setFieldValue("email", "ummm@example.com");
      // set multiple values
      actions.setValues({
        email: "ummm@example.com",
        password: "P@$$w0Rd",
      });
    },
  },
});
</script>

<style lang="scss" scoped></style>
