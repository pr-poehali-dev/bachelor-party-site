import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Форма подтверждения участия
    console.log("RSVP submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <Icon
              name="Wine"
              size={80}
              className="text-yellow-500 mx-auto mb-4"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            BACHELOR
            <span className="block text-yellow-500">PARTY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Приглашаем тебя на незабываемый мальчишник!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Подтвердить участие
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              Узнать подробности
            </Button>
          </div>
        </div>
      </section>

      {/* About Event Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О событии</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Классический мальчишник с друзьями в лучших традициях
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border-yellow-500 border-2">
              <CardHeader className="text-center">
                <Icon
                  name="Calendar"
                  size={48}
                  className="text-yellow-500 mx-auto mb-4"
                />
                <CardTitle className="text-yellow-500">Дата и время</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold mb-2">15 августа 2024</p>
                <p className="text-gray-300">Сбор в 18:00</p>
                <p className="text-gray-300">Начало в 19:00</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 border-2">
              <CardHeader className="text-center">
                <Icon
                  name="MapPin"
                  size={48}
                  className="text-yellow-500 mx-auto mb-4"
                />
                <CardTitle className="text-yellow-500">
                  Место проведения
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold mb-2">Клуб "Джентльмен"</p>
                <p className="text-gray-300">ул. Пушкина, 42</p>
                <p className="text-gray-300">Москва</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-yellow-500 border-2">
              <CardHeader className="text-center">
                <Icon
                  name="Shirt"
                  size={48}
                  className="text-yellow-500 mx-auto mb-4"
                />
                <CardTitle className="text-yellow-500">Дресс-код</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold mb-2">Smart Casual</p>
                <p className="text-gray-300">Рубашка, брюки</p>
                <p className="text-gray-300">Без галстука</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-8">Программа вечера</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 bg-black p-6 rounded-lg border border-yellow-500">
                <Icon name="Clock" size={24} className="text-yellow-500" />
                <div>
                  <p className="font-semibold">19:00 - 20:00</p>
                  <p className="text-gray-300">Встреча и коктейли</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-black p-6 rounded-lg border border-yellow-500">
                <Icon name="Utensils" size={24} className="text-yellow-500" />
                <div>
                  <p className="font-semibold">20:00 - 21:30</p>
                  <p className="text-gray-300">Ужин и тосты</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-black p-6 rounded-lg border border-yellow-500">
                <Icon name="Music" size={24} className="text-yellow-500" />
                <div>
                  <p className="font-semibold">21:30 - 23:00</p>
                  <p className="text-gray-300">Развлекательная программа</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-black p-6 rounded-lg border border-yellow-500">
                <Icon
                  name="PartyPopper"
                  size={24}
                  className="text-yellow-500"
                />
                <div>
                  <p className="font-semibold">23:00 - 02:00</p>
                  <p className="text-gray-300">Танцы и веселье</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Атмосфера</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Взгляните на то, что вас ждет
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-yellow-500">
              <img
                src="/img/ac7c5e6b-d408-41d4-9700-c81cb0bc721d.jpg"
                alt="Элегантный тост на мальчишнике"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-yellow-500">
              <img
                src="/img/f0c5af31-d2a1-4366-b954-6e5e0553c38b.jpg"
                alt="Игра в бильярд"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-yellow-500">
              <img
                src="/img/c240019b-ee57-4569-8587-03c44867114c.jpg"
                alt="Торжественный ужин"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Подтверждение
              </h2>
              <p className="text-xl text-gray-300">
                Подтверди свое участие до 10 августа
              </p>
            </div>

            <Card className="bg-black border-yellow-500 border-2">
              <CardHeader>
                <CardTitle className="text-yellow-500 text-center text-2xl">
                  RSVP
                </CardTitle>
                <CardDescription className="text-center text-gray-300">
                  Заполни форму, чтобы мы знали, что ты с нами!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Имя и фамилия
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введи свое имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-gray-800 border-yellow-500 text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-gray-800 border-yellow-500 text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">
                      Сообщение (необязательно)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Напиши что-нибудь жениху..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-gray-800 border-yellow-500 text-white"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg py-3"
                  >
                    Подтвердить участие
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Icon
              name="Wine"
              size={48}
              className="text-yellow-500 mx-auto mb-4"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            До встречи на мальчишнике!
          </h3>
          <p className="text-gray-300 mb-4">
            По всем вопросам: +7 (999) 123-45-67
          </p>
          <div className="flex justify-center gap-4">
            <Badge
              variant="outline"
              className="border-yellow-500 text-yellow-500"
            >
              #BachelorParty2024
            </Badge>
            <Badge
              variant="outline"
              className="border-yellow-500 text-yellow-500"
            >
              #LastNightOut
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
