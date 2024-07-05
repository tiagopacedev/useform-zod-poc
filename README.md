# Form Validation with react-hook-form and zod

## Key Concepts

- **Zod Schema:** Defines the schema using `z.object` with validation rules and custom error messages.
- **FormData Type:** Infers the TypeScript type from the schema to ensure type safety.
- **useForm Hook:** Utilizes the `useForm` hook from `react-hook-form` with `zodResolver` to apply the schema validation.
- **Form Structure:** Form fields are registered using `useForm`, and error messages are displayed conditionally.

## Getting Started

### Installation

```bash
# Install dependencies
yarn
```

```bash
# Run development server
yarn dev
```

### Documentation
[React useForm](https://react-hook-form.com/docs/useform)

[Zod](https://zod.dev)
