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
    import SubjectService from "@/services/subjectService"

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
                SubjectService.retrieveAll()
                    .then((response) => {
                        this.subjects = response.data;
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