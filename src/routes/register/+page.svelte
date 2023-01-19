<script lang="ts">
  import { enhance } from "$app/forms";

  export let form: { message?: string };
</script>

<div>
  <h2>Register</h2>

  <form method="POST" use:enhance={({ data, cancel }) => {
    form = {};
    const username = data.get('username')?.toString() || '';
    const password = data.get('password')?.toString() || '';
    if (!username || !password) {
      form.message = 'Invalid input';
      cancel();
    }
  }}>
  <label for="username">username</label>
  <input id="username" name="username" />
  <label for="email">email</label>
  <input type="email" id="email" name="email" />
  <label for="password">password</label>
  <input type="password" id="password" name="password" />
  <input type="submit" value="Continue" />
  </form>
</div>