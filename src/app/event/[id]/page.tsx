"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  School,
  User,
  AlertCircle,
  Ban,
  Lock,
} from "lucide-react";
import type { EventApiResponse, EventData } from "@/types/types";

const EVENT_API_BASE =
  "https://thecatchmeapp-12706a155832.herokuapp.com/api/v1/public/events";

export default function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchEvent = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${EVENT_API_BASE}/${id}`);
        if (!res.ok) {
          throw new Error(
            res.status === 404
              ? "Event not found"
              : `Failed to load event (${res.status})`,
          );
        }
        const json: EventApiResponse = await res.json();
        setEvent(json.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getAttendeeSlots = () => {
    if (!event) return "";
    if (event.maxAttendees === 0)
      return `${event.attendeeCount} attending (unlimited)`;
    return `${event.attendeeCount} / ${event.maxAttendees} attending`;
  };

  // --- LOADING STATE ---
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Loading Header Skeleton */}
        <div className="bg-gradient-to-r from-black to-gray-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="h-5 w-32 bg-white/20 rounded animate-pulse mb-6" />
            <div className="h-10 w-3/4 bg-white/20 rounded animate-pulse mb-4" />
            <div className="h-5 w-1/2 bg-white/20 rounded animate-pulse" />
          </div>
        </div>
        {/* Loading Body Skeleton */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="h-64 md:h-96 bg-gray-200 animate-pulse" />
            <div className="p-6 md:p-10 space-y-6">
              <div className="flex flex-wrap gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-36 bg-gray-200 rounded-full animate-pulse"
                  />
                ))}
              </div>
              <div className="space-y-3">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-5/6" />
              </div>
              <div className="flex gap-6">
                <div className="h-10 w-28 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-10 w-28 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- ERROR STATE ---
  if (error || !event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-lg mx-auto px-6 py-12 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-10">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {error === "Event not found"
                ? "Event Not Found"
                : "Something Went Wrong"}
            </h2>
            <p className="text-gray-600 mb-8">
              {error === "Event not found"
                ? "The event you're looking for doesn't exist or may have been removed."
                : error}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ff0a54] text-white rounded-full hover:bg-[#e00948] transition-colors"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- EVENT PAGE ---
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="flex items-start gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 break-words">
                {event.title}
              </h1>
              {event.schoolName && (
                <p className="text-lg text-gray-300 flex items-center gap-2">
                  <School className="w-5 h-5 flex-shrink-0" />
                  <span className="truncate">{event.schoolName}</span>
                </p>
              )}
            </div>
            {event.isCancelled && (
              <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold flex-shrink-0">
                <Ban className="w-4 h-4" />
                Cancelled
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Event Image */}
          {event.imageUrl && (
            <div className="relative w-full h-52 sm:h-72 md:h-96">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Hide broken image
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.classList.add(
                    "bg-gradient-to-r",
                    "from-[#ff0a54]/10",
                    "to-purple-500/10",
                    "flex",
                    "items-center",
                    "justify-center",
                  );
                }}
              />
            </div>
          )}

          <div className="p-6 md:p-10 space-y-8">
            {/* Quick Info Pills */}
            <div className="flex flex-wrap gap-3">
              {/* Date */}
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>{formatDate(event.startTime)}</span>
              </div>

              {/* Time */}
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>
                  {formatTime(event.startTime)} – {formatTime(event.endTime)}
                </span>
              </div>

              {/* Venue */}
              {event.venue && (
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate max-w-[200px]">{event.venue}</span>
                </div>
              )}

              {/* Attendees */}
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                <Users className="w-4 h-4 flex-shrink-0" />
                <span>{getAttendeeSlots()}</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#ff0a54]" />
                <span>
                  {event.reactionCount}{" "}
                  {event.reactionCount === 1 ? "Reaction" : "Reactions"}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span>
                  {event.commentCount}{" "}
                  {event.commentCount === 1 ? "Comment" : "Comments"}
                </span>
              </div>
              {event.commentLocked && (
                <div className="flex items-center gap-1.5 text-amber-600">
                  <Lock className="w-4 h-4" />
                  <span>Comments locked</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                About This Event
              </h2>
              <div className="prose prose-gray max-w-none">
                {event.description ? (
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
                    {event.description}
                  </p>
                ) : (
                  <p className="text-gray-400 italic">
                    No description provided.
                  </p>
                )}
              </div>
            </div>

            {/* Creator Info */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Organized by
              </h3>
              <div className="flex items-center gap-4">
                {event.creatorProfilePhoto ? (
                  <img
                    src={event.creatorProfilePhoto}
                    alt={`${event.creatorFirstName} ${event.creatorLastName}`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#ff0a54]/10 flex items-center justify-center border-2 border-gray-200">
                    <User className="w-6 h-6 text-[#ff0a54]" />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">
                    {event.creatorFirstName} {event.creatorLastName}
                  </p>
                  {event.schoolName && (
                    <p className="text-sm text-gray-500">{event.schoolName}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row gap-3">
              {event.externalLink && (
                <a
                  href={event.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ff0a54] text-white rounded-full hover:bg-[#e00948] transition-colors font-semibold"
                >
                  <ExternalLink className="w-4 h-4" />
                  View External Link
                </a>
              )}

              {event.shareLink && (
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(event.shareLink);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                >
                  <Share2 className="w-4 h-4" />
                  Copy Share Link
                </button>
              )}
            </div>

            {/* Cancelled Warning */}
            {event.isCancelled && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-start gap-4">
                <Ban className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-1">
                    This event has been cancelled
                  </h3>
                  <p className="text-red-600 text-sm">
                    The organizer has cancelled this event. Please check back
                    for updates or contact the organizer for more information.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-[#ff0a54] hover:underline font-medium inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
