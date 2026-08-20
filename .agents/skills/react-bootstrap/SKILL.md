---
name: react-bootstrap
description: Best practices and guidelines for using React-Bootstrap and Bootstrap 5 with modern React (React 19). Triggers when creating or refactoring UI components using Bootstrap, React-Bootstrap, responsive grid layouts, forms, modals, navbars, and Bootstrap styling.
---

# React-Bootstrap & Bootstrap 5 with React 19 Guidelines

This skill provides essential guidelines, architectural patterns, and best practices for developing frontend applications using **React-Bootstrap** and **Bootstrap 5** in **React 19**.

---

## 1. Installation & Setup

### Package Installation
Always prefer `yarn` (or optionally `npm`):
```bash
yarn add react-bootstrap bootstrap
# або
npm install react-bootstrap bootstrap
```

### CSS Import
Ensure Bootstrap CSS (or SCSS) is imported at the root entry point (`main.jsx`, `main.tsx`, `index.jsx`, or `App.jsx`):
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## 2. Component Import Best Practices

### Named Imports vs Direct Submodule Imports
- **Named imports** (standard):
  ```javascript
  import { Container, Row, Col, Button, Card, Form, Navbar, Nav } from 'react-bootstrap';
  ```
- **Direct imports** (for tree-shaking / smaller bundle size in specific toolchains):
  ```javascript
  import Button from 'react-bootstrap/Button';
  import Container from 'react-bootstrap/Container';
  ```

---

## 3. Core Layout & Grid System

- Always wrap layout sections in `<Container>` (or `<Container fluid>` for full width).
- Follow the 12-column grid system with `<Row>` and `<Col>`:
```jsx
<Container className="py-4">
  <Row className="g-3">
    <Col xs={12} md={8}>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Main Content</Card.Title>
          <Card.Text>Responsive grid layout using React-Bootstrap.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} md={4}>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Sidebar</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
```

---

## 4. React 19 & React-Bootstrap Interoperability

1. **Ref forwarding:**
   - In React 19, `ref` is passed directly as a prop. React-Bootstrap components support `ref` out of the box.
2. **Form Handling with Actions:**
   - With React 19 Form Actions (`<form action={...}>` / `useActionState`), you can use native `<form>` wrapped around React-Bootstrap controls (`<Form.Group>`, `<Form.Control>`, `<Form.Label>`).
3. **Controlled vs Uncontrolled Inputs:**
   - Always ensure form inputs have proper `name`, `id`, and state handlers (`value` + `onChange` or native FormData extraction).

---

## 5. Integration with Custom Styling

- Combine Bootstrap utility classes (`d-flex`, `justify-content-between`, `align-items-center`, `gap-3`, `shadow-sm`, `rounded-3`) with custom CSS / modules.
- Use CSS variables for custom themes (e.g. `--bs-primary`, `--bs-border-radius`).
- Avoid overriding Bootstrap styles with `!important`; prefer utility classes or scoped CSS modules.
