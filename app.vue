<template>

	<Header>
		<template v-slot:nav-item>
			<NuxtLink class="font-semibold text-gray-900 hover:text-gray-900" to="/"
				>Home</NuxtLink
			>
			<NuxtLink
				class="font-semibold text-gray-900 hover:text-gray-900"
				to="/products"
				>Products</NuxtLink
			>
			<NuxtLink
				class="font-semibold text-gray-900 hover:text-gray-900"
				to="/contact"
				>Contact Us</NuxtLink
			>
		</template>
	</Header>
	
    <NuxtPage>
      
    </NuxtPage>

	<Footer> 
        
    </Footer>
</template>
