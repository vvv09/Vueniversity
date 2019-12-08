<template>
    <div>
        Всего : {{groups.length}}
        <div id="table">
            <table class="highlight">
                <tbody>
                <ItemRow
                        v-for="(groups, i) in groups"
                        :item="groups"
                        :index="i"
                        @update="updateItem"
                        @delete="deleteItem"/>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import ItemRow from "@/components/ItemRow"
    import ItemService from "@/services/groupService"

    export default {
        name: "GroupTable",
        components: {
            ItemRow
        },
        data() {
            return {
                groups: []
            }
        },
        methods: {
            refreshList() {
                ItemService.retrieveAll()
                    .then((response) => {
                        this.groups = response.data;
                    });
            },
            updateItem(id) {
                this.$router.push(`/groups/${id}`)
            },
            deleteItem(id) {
                ItemService.deleteItem(id)
                    .then(() => {
                        this.refreshList()
                    })
            }
        },
        created() {
            this.refreshList();
        }
    }
</script>

<style scoped>
    #table {
        height: 73vh;
        overflow: hidden;
    }

    #table:hover {
        overflow-y: overlay;
    }

</style>