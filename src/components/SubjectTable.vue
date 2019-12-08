<template>
    <div>
        Всего : {{subjects.length}}
        <div id="table">
            <table class="highlight">
                <tbody>
                    <ItemRow
                        v-for="(subject, i) in subjects"
                        :item="subject"
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
    import ItemService from "@/services/subjectService"

    export default {
        name: "SubjectTable",
        components: {
            ItemRow
        },
        data() {
            return {
                subjects: []
            }
        },
        methods: {
            refreshList() {
                ItemService.retrieveAll()
                    .then((response) => {
                        this.subjects = response.data;
                    });
            },
            updateItem(id) {
                this.$router.push(`/subjects/${id}`)
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