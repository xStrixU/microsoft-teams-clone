-- CreateEnum
CREATE TYPE "TeamMemberRole" AS ENUM ('OWNER', 'MEMBER', 'GUEST');

-- CreateTable
CREATE TABLE "team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_member" (
    "member_id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "role" "TeamMemberRole" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "team_member_member_id_team_id_key" ON "team_member"("member_id", "team_id");

-- AddForeignKey
ALTER TABLE "team_member" ADD CONSTRAINT "team_member_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_member" ADD CONSTRAINT "team_member_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
