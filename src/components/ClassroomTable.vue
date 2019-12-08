<template>
    <div>
        Всего : {{classrooms.length}}
        <div id="table">
            <table class="highlight">
                <tbody>
                <ItemRow
                        v-for="(classroom, i) in classrooms"
                        :item="classroom"
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
    import ItemService from "@/services/classroomService"

    export default {
        name: "GroupTable",
        components: {
            ItemRow
        },
        data() {
            return {
                classrooms: []
            }
        },
        methods: {
            refreshList() {
                ItemService.retrieveAll()
                    .then((response) => {
                        this.classrooms = response.data;
                    });
            },
            updateItem(id) {
                this.$router.push(`/classrooms/${id}`)
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