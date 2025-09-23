from app.db import Base
from sqlalchemy import String, Integer, BigInteger, UUID
from sqlalchemy.orm import Mapped, mapped_column


class User(Base):
    __tablename__ = "users"

    id: Mapped[UUID] = mapped_column(Integer, primary_key=True, autoincrement=True)
    tg_id: Mapped[int] = mapped_column(BigInteger, unique=True, nullable=False, index=True)
    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False, index=True)
    first_name: Mapped[str] = mapped_column(String(100), nullable=False)
    last_name: Mapped[str] = mapped_column(String(100), nullable=False)

    # photo_url: Mapped[str] = mapped_column(String(100), nullable=False)  # TODO потом добавить фото через миграции

    def __repr__(self):
        return (f"<User("
                f"id={self.id},"
                f" tg_id={self.tg_id}"
                f" username={self.username},"
                f" first_name={self.first_name},"
                f" last_name={self.last_name})>")

# class User(Base):
#     __tablename__ = "users"
#
#     id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
#     tg_id = Column(String, unique=True, index=True, nullable=False)
#     username = Column(String, index=True, nullable=True)
#     first_name = Column(String, index=True, nullable=True)
#     last_name = Column(String, nullable=True)
