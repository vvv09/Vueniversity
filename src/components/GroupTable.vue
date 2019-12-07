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
    import GroupService from "@/services/groupService"

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
                GroupService.retrieveAll()
                    .then((response) => {
                        this.groups = response.data;
                    });
            },
            updateItem() {
                console.log("updating")
            },
            deleteItem() {
                console.log("deleting")
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