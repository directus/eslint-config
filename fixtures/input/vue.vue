<script setup lang="ts">
/**
 * @param {number} foo
 */
function quux(foo: string) {
	console.log(foo);
}
</script>

<template>
  hello {{ quux() }}
</template>
