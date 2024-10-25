<script setup>
definePageMeta({
  middleware: 'auth',
})

const loading = ref(false)
const newTodo = ref('')
const newTodoInput = ref(null)

const { data: todos, refresh } = await useFetch('/api/todos')

const toast = useToast()

async function addTodo() {
  if (!newTodo.value.trim()) return

  loading.value = true

  try {
    const todo = await $fetch('/api/todos', {
      method: 'POST',
      body: {
        title: newTodo.value,
        completed: 0,
      },
    })
    await refresh()
    toast.success(`Todo "${todo.title}" created.`)
    newTodo.value = ''
    nextTick(() => {
      newTodoInput.value?.input?.focus()
    })
  }
  catch {
    toast.error('Failed to create todo.')
  }
  loading.value = false
}

async function deleteTodo(todo) {
  await $fetch(`/api/todos/${todo.id}`, { method: 'DELETE' })
  todos.value = todos.value.filter(t => t.id !== todo.id)
  await refresh()
  toast.success(`Todo "${todo.title}" deleted.`)
}
</script>

<template>
  <div class="container m-auto p-4 max-w-2xl">
    <form @submit.prevent="addTodo">
      <div class="flex items-center gap-2">
        <input
          ref="newTodoInput"
          v-model="newTodo"
          name="todo"
          :disabled="loading"
          placeholder="Make a Nuxt demo"
          autocomplete="off"
          autofocus
        >

        <button
          type="submit"
          class="btn"
          :class="{ 'btn--loading': loading }"
          :disabled="loading || newTodo.trim().length === 0"
        >
          <span>Add</span>
        </button>
      </div>
    </form>

    <ul>
      <li
        v-for="todo of todos"
        :key="todo.id"
        class="flex items-center gap-4 py-2"
      >
        <span
          class="flex-1 font-medium"
          :class="[todo.completed ? 'line-through text-gray-500' : '']"
        >
          {{ todo.title }}
        </span>
        <button
          class="btn-danger"
          @click="deleteTodo(todo)"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>
