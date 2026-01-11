<script>
	import MailIcon from "$lib/Assets/MailIcon.svelte";
	import OfficeIcon from "$lib/Assets/OfficeIcon.svelte";
	import PinIcon from "$lib/Assets/PinIcon.svelte";
    import GlobeIcon from "$lib/Assets/GlobeIcon.svelte";
    
    export let contact;
</script>

<div class="contacts grid grid-cols-2 gap-4">
    <div class="email">
        <MailIcon></MailIcon>
        <span>{contact.email ?? "NO Email"}</span>
    </div>
    <div class="location">
        <PinIcon></PinIcon>
        <span>{contact.location ?? "NO Location"}</span>
    </div>
    <div class="site">
        <GlobeIcon></GlobeIcon>
        <span>{contact.blog || "NO site"}</span>
    </div>
    <div class="company">
        <OfficeIcon></OfficeIcon>
        <span>{contact.company ?? "NO company"}</span>
    </div>
</div>

<style>
    .contacts div {
        display: flex;
        gap: 0.5rem;
    }
    .contacts div span {
        font-size: 14px;
    }
</style>